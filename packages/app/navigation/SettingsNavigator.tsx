import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { SettingsStackParamList } from "../types";
import Header from "./Header";

// Pages
import { lazy } from "@loadable/component";
const PersonalisationScreen = lazy(() => import("../screens/Settings/Personalisation"));
const AccountsScreen = lazy(() => import("../screens/Settings/Accounts"));
const NotificationScreen = lazy(() => import("../screens/Settings/Notifications"));
const BookmarksScreen = lazy(() => import("../screens/Settings/Bookmarks"));

const SettingsStack = createStackNavigator<SettingsStackParamList>();

export default function SettingsNavigator() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
        cardStyle: {
          maxHeight: "100%",
        },
      }}>
      <SettingsStack.Screen name="Personalisation" component={PersonalisationScreen} />
      <SettingsStack.Screen name="Accounts" component={AccountsScreen} />
      <SettingsStack.Screen name="Notifications" component={NotificationScreen} />
      <SettingsStack.Screen name="Bookmarks" component={BookmarksScreen} />
    </SettingsStack.Navigator>
  );
}
