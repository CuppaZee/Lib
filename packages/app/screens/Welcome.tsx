import * as React from "react";
import { Pressable, StyleSheet, View, Image } from "react-native";
import { Button, Icon, Layout, Text } from "@ui-kitten/components";
import useLogin from "../hooks/useLogin";
import { ScrollView } from "react-native-gesture-handler";
import useTitle from "../hooks/useTitle";
import { useSettings } from "../hooks/useSettings";
import * as themes from '../themes';
import { useTeakens } from "../hooks/useToken";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  useTitle("☕ Welcome");
  const [settings, setSettings] = useSettings();
  const [loading, login, ready] = useLogin();
  const nav = useNavigation();
  const { data: teakens } = useTeakens();

  if (settings.ready) {
    nav.navigate('Dashboard');
  }

  return (
    <Layout style={styles.page}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          alignSelf: "center",
          width: 400,
          maxWidth: "100%",
          padding: 4,
          justifyContent: "center",
          flexGrow: 1,
        }}>
        <Text category="h2" style={{ textAlign: "center" }}>
          Welcome to CuppaZee
        </Text>
        <Text category="h6" style={{ textAlign: "center", marginTop: 16 }}>
          Pick a Theme
        </Text>
        <View style={{ width: 280, flexDirection: "row", flexWrap: "wrap", alignSelf: "center" }}>
          {Object.entries(themes).map(i => (
            <Pressable
              onPress={() => setSettings({ ...settings, theme: i[0] as typeof settings.theme })}
              style={{ padding: settings?.theme === i[0] ? 0 : 4 }}>
              <View
                style={{
                  borderRadius: 32,
                  height: settings?.theme === i[0] ? 56 : 48,
                  width: settings?.theme === i[0] ? 56 : 48,
                  borderWidth: 2,
                  backgroundColor:
                    i[1][i[1].style === "dark" ? "color-basic-800" : "color-basic-200"],
                }}
              />
            </Pressable>
          ))}
        </View>
        <Text category="h6" style={{ textAlign: "center", marginTop: 16 }}>
          Select your Language
        </Text>
        <Text category="c1" style={{ textAlign: "center" }}>
          Language Selector coming soon
        </Text>
        <Text category="h6" style={{ textAlign: "center", marginTop: 16 }}>
          Add Accounts
        </Text>
        {Object.entries(teakens).map(i => (
          <Layout
            level="3"
            style={{
              margin: 4,
              borderRadius: 8,
            }}>
            <View
              style={{
                padding: 8,
                flexDirection: "row",
                alignItems: "center",
              }}>
              <Image
                style={{ height: 32, width: 32, borderRadius: 16, marginRight: 8 }}
                source={{
                  uri: `https://munzee.global.ssl.fastly.net/images/avatars/ua${Number(
                    i[0]
                  ).toString(36)}.png`,
                }}
              />
              <Text category="h6">{i[1].username}</Text>
            </View>
          </Layout>
        ))}
        <Button
          style={{ margin: 4 }}
          accessoryLeft={props => <Icon {...props} name="account-plus" />}
          appearance="outline"
          disabled={!ready}
          onPress={login}>
          {`Add${Object.keys(teakens).length > 0 ? " Another" : ""} Account`}
        </Button>
        {Object.keys(teakens).length > -0 && <Button
          style={{ margin: 4 }}
          accessoryLeft={props => <Icon {...props} name="home" />}
          appearance="outline"
          onPress={() => {
            setSettings({ ...settings, ready: true });
          }}>
          Continue to Dashboard
        </Button>}
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
