import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import {
  NavigationState,
  PartialState,
  useNavigationState,
} from "@react-navigation/native";
import { DrawerGroup, DrawerItem, Icon, Layout } from "@ui-kitten/components";
import React from "react";
import { Image, ScrollView } from "react-native";
import { useUserBookmarks } from "../hooks/useBookmarks";
import useDay from "../hooks/useDay";

type NavigationRoute = {
  state?: NavigationState | PartialState<NavigationState>;
  key: string;
  name: string;
  params?: any;
};

export default function DrawerContent(
  props: DrawerContentComponentProps<DrawerContentOptions>
) {
  const [users] = useUserBookmarks();
  const day = useDay();
  const state = useNavigationState((i) => i);
  const page: NavigationRoute[] = [state.routes[state.routes.length - 1]];
  while (page[page.length - 1].state) {
    const p = page[page.length - 1].state;
    if (p?.history && p?.routes) {
      const history = (p.history as { type: string; key?: string }[]).filter(
        (i) => i.type !== "drawer"
      );
      const x = (p.routes as NavigationRoute[]).find(
        (i) => i.key === history[history.length - 1]?.key
      );
      if (x) {
        page.push(x);
      } else {
        console.log("BREAK ERR - A", p);
        break;
      }
    } else {
      const x = p?.routes[(p?.routes.length ?? 0) - 1];
      if (x) {
        page.push(x as NavigationRoute);
      } else {
        console.log("BREAK ERR - B", p);
        break;
      }
    }
  }
  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ flexGrow: 1 }}>
        <DrawerItem
          selected={page[1]?.name === "Dashboard"}
          title="Dashboard"
          accessoryLeft={(props) => <Icon {...props} name="home" />}
          onPress={() => props.navigation.navigate("Dashboard")}
        />
        {/* Users */}
        {users.map((user) => (
          <DrawerGroup
            title={user.username}
            accessoryLeft={() => (
              <Image
                source={{
                  uri: `https://munzee.global.ssl.fastly.net/images/avatars/ua${Number(
                    user.user_id
                  ).toString(36)}.png`,
                }}
                style={{
                  height: 32,
                  marginVertical: -4,
                  width: 32,
                  borderRadius: 16,
                  marginHorizontal: 2,
                }}
              />
            )}
          >
            <DrawerItem
              selected={
                page[1]?.name === "User" &&
                page[2]?.name === "Profile" &&
                (page[2]?.params as any)?.username === user.username
              }
              title="Profile"
              accessoryLeft={(props) => <Icon {...props} name="account" />}
              onPress={() =>
                props.navigation.navigate("User", {
                  params: { username: user.username },
                  screen: "Profile",
                })
              }
            />
            <DrawerItem
              selected={
                page[1]?.name === "User" &&
                page[2]?.name === "Activity" &&
                (page[2]?.params as any)?.username === user.username
              }
              title="Activity"
              accessoryLeft={(props) => <Icon {...props} name="calendar" />}
              onPress={() =>
                props.navigation.navigate("User", {
                  params: { username: user.username, date: day().format('YYYY-MM-DD') },
                  screen: "Activity",
                })
              }
            />
            <DrawerItem
              selected={
                page[1]?.name === "User" &&
                page[2]?.name === "Inventory" &&
                (page[2]?.params as any)?.username === user.username
              }
              title="Inventory"
              accessoryLeft={(props) => <Icon {...props} name="archive" />}
              onPress={() =>
                props.navigation.navigate("User", {
                  params: { username: user.username },
                  screen: "Inventory",
                })
              }
            />
            <DrawerItem
              title="ZeeOps"
              accessoryLeft={(props) => <Icon {...props} name="briefcase" />}
            />
            <DrawerItem
              title="Clan Progress"
              accessoryLeft={(props) => <Icon {...props} name="shield" />}
            />
            <DrawerItem
              title="Bouncers"
              accessoryLeft={(props) => <Icon {...props} name="star" />}
            />
            <DrawerItem
              title="Blast Checker"
              accessoryLeft={(props) => <Icon {...props} name="bomb" />}
            />
            <DrawerItem
              title="QRew Checker"
              accessoryLeft={(props) => <Icon {...props} name="hammer" />}
            />
            <DrawerItem
              title="Universal Capper"
              accessoryLeft={(props) => <Icon {...props} name="check" />}
            />
          </DrawerGroup>
        ))}

        {/* Clans */}
        <DrawerItem
          selected={
            page[1]?.name === "Clan" &&
            page[2]?.name === "Stats" &&
            (page[2]?.params as any)?.clanid === "1349"
          }
          title="The Cup of Coffee Clan"
          accessoryLeft={() => (
            <Image
              source={{
                uri:
                  "https://munzee.global.ssl.fastly.net/images/clan_logos/11h.png",
              }}
              style={{
                height: 32,
                marginVertical: -4,
                width: 32,
                borderRadius: 16,
                marginHorizontal: 2,
              }}
            />
          )}
          onPress={() =>
            props.navigation.navigate("Clan", {
              params: { clanid: 1349 },
              screen: "Stats",
            })
          }
        />

        {/* Tools */}
        <DrawerItem
          title="Bouncers"
          accessoryLeft={(props) => <Icon {...props} name="map-marker" />}
        />
        <DrawerItem
          title="Munzee Types"
          accessoryLeft={(props) => <Icon {...props} name="database" />}
        />
        <DrawerItem
          selected={page[1]?.name === "Tools" && page[2]?.name === "Calendar"}
          title="Calendar"
          accessoryLeft={(props) => <Icon {...props} name="calendar" />}
          onPress={() =>
            props.navigation.navigate("Tools", {
              screen: "Calendar",
            })
          }
        />
        <DrawerItem
          title="Evo Planner"
          accessoryLeft={(props) => <Icon {...props} name="dna" />}
        />

        {/* Settings */}
        <DrawerGroup
          title="Settings"
          accessoryLeft={(props) => <Icon {...props} name="cog" />}
        >
          <DrawerItem
            title="Personalisation"
            accessoryLeft={(props) => <Icon {...props} name="palette" />}
          />
          <DrawerItem
            title="Notifications"
            accessoryLeft={(props) => <Icon {...props} name="bell" />}
          />
          <DrawerItem
            title="Accounts"
            accessoryLeft={(props) => (
              <Icon {...props} name="account-multiple" />
            )}
            onPress={() => props.navigation.navigate("Auth")}
          />
          <DrawerItem
            title="Bookmarks"
            accessoryLeft={(props) => (
              <Icon {...props} name="bookmark-multiple" />
            )}
          />
        </DrawerGroup>

        {/* More */}
        <DrawerItem
          selected={page[1]?.name === "Tools" && page[2]?.name === "Credits"}
          title="Credits"
          accessoryLeft={(props) => <Icon {...props} name="heart" />}
          onPress={() =>
            props.navigation.navigate("Tools", {
              screen: "Credits",
            })
          }
        />
        <DrawerItem
          title="GitHub"
          accessoryLeft={(props) => <Icon {...props} name="github" />}
        />
        <DrawerItem
          title="Donate"
          accessoryLeft={(props) => (
            <Icon {...props} name="currency-usd-circle" />
          )}
        />
      </ScrollView>
    </Layout>
  );
}
