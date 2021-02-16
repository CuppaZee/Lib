import { useNavigation } from "@react-navigation/native";
import { Icon, Layout, Text, DrawerItem } from "@ui-kitten/components";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet } from "react-native";
import { useClanBookmarks } from "../../hooks/useBookmarks";
import useTitle from "../../hooks/useTitle";

export default function ClansDashCard() {
  const { t } = useTranslation();
  const nav = useNavigation();
  const [clans] = useClanBookmarks();
  useTitle(`☕ Dashboard`);
  return (
    <Layout level="3" style={[styles.card, { flex: 1, padding: 4 }]}>
      <Text style={{ marginLeft: 4 }} category="h5">
        {t("dashboard:clans")}
      </Text>
      <DrawerItem
        style={{ backgroundColor: "transparent" }}
        selected={false}
        title={() => (
          <Text style={{ flex: 1, marginLeft: 4 }} category="s1">
            {t("pages:clan_bookmarks")}
          </Text>
        )}
        accessoryLeft={props => <Icon name="bookmark" {...props} />}
        onPress={() =>
          nav.navigate("Clan", {
            screen: "Bookmarks",
          })
        }
      />
      {clans?.map(clan => (
        <DrawerItem
          style={{ backgroundColor: "transparent" }}
          selected={false}
          title={() => (
            <Text style={{ flex: 1, marginLeft: 4 }} category="s1">
              {clan.name}
            </Text>
          )}
          accessoryLeft={() => (
            <Image
              source={{
                uri: `https://munzee.global.ssl.fastly.net/images/clan_logos/${clan.clan_id.toString(
                  36
                )}.png`,
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
            nav.navigate("Clan", {
              params: { clanid: clan.clan_id.toString() },
              screen: "Stats",
            })
          }
        />
      ))}
    </Layout>
  );
}

const styles = StyleSheet.create({
  card: { margin: 4, borderRadius: 4 },
});
