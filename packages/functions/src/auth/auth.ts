import fetch from "node-fetch";
import crypto from "crypto";
import { URLSearchParams } from "url";
import config from '../config.json';
import firebase from "firebase-admin";
import { Route } from "../types";

const route: Route = {
  path: "auth/auth",
  latest: 1,
  versions: [
    {
      version: 1,
      async function({
        params: { code, state },
        res,
        db
      }) {
        try {

          const state_data = JSON.parse(state || "{}");
          const d = await fetch("https://api.munzee.com/oauth/login", {
            method: "POST",
            body: new URLSearchParams({
              client_id: config.client_id,
              client_secret: config.client_secret,
              grant_type: "authorization_code",
              code,
              redirect_uri: config.redirect_uri,
            }),
          });
          const data = await d.json();
          const teaken = crypto.randomBytes(20).toString("hex");
          const user_d = await fetch("https://api.munzee.com/user", {
            method: "POST",
            body: new URLSearchParams({
              access_token: data.data.token.access_token,
              data: JSON.stringify({
                user_id: data.data.user_id,
              }),
            }),
          });
          const user_data = await user_d.json();
          const { username, user_id } = user_data.data;
          
          const doc = db.collection("auth").doc(user_id.toString());
          const doc_data = (await doc.get()).data();
  
          await doc.set({
            token: data.data.token,
            user_id,
            teakens: [
              ...(doc_data?(doc_data.teakens||[]):[]),
              teaken
            ]
          })
  
          res.redirect(
            `${state_data.redirect}?teaken=${encodeURIComponent(
              teaken
            )}&username=${username}&user_id=${user_id}&state=${encodeURIComponent(state)}`
          );
  
  
          const platform = {
            android: "🤖",
            ios: "🍎",
            web: "🌐"
          }[state_data.platform as "android" | "ios" | "web"]||`[${state_data.platform}] `;
          const { list } = (await db.collection("data").doc("user_list").get()).data() ?? {
            list: [],
          };
          let discordmessage = ``;
          if(list.includes(username)){
              discordmessage = `${platform}🔁 ${username} | ${list.length} Users [#${list.indexOf(username)+1}]`
          } else {
              discordmessage = `${platform}🆕 ${username} | User #${list.length+1}`;
              await db.collection('data').doc('user_list').update({
                  list: firebase.firestore.FieldValue.arrayUnion(username)
              })
          }
          await fetch(
            config.discord.authorization,
            {
              method: "POST",
              body: new URLSearchParams({
                content: discordmessage
              })
            }
          )
          return {
            norespond: true,
          };
        } catch(e) {
          res.send(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Sorry</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
                body {
                  margin: 0!important;
                  background-color: #e7f7ec;
                  text-align: center;
                  padding: 8px;
                  font-family: 'Roboto', sans-serif;
                }
                h1 {
                  margin: 0;
                }
                p {
                  margin: 0;
                }
              </style>
            </head>
            <body>
              <h1>Oops!</h1>
              <p>We need to be able to read your Munzee Account data. Please close this popup and log in again.</h1>
            </body>
            </html>`
          );
          return {
            norespond: true,
          }
        }
      },
    },
  ],
};
export default route;