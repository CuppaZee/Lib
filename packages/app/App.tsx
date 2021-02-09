import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "./polyfill";

import { Platform, useColorScheme, View } from "react-native";
import Navigation from "./navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as JotaiProvider } from "jotai";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";

import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as themes from "./themes";
import { useSettings } from "./hooks/useSettings";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import './lang/i18n';

import './BackgroundLocation';

function MCIcon({ name, style }: { name: string | number | symbol; style: any }) {
  try {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <View style={{ height }}>
        <MaterialCommunityIcons
          name={name as any}
          size={height}
          color={tintColor}
          style={iconStyle}
        />
      </View>
    );
  } catch (e) {}
}

const IconProvider = (name: string | number | symbol) => ({
  toReactElement: (props: any) => MCIcon({ name, ...props }),
});

function createIconsMap() {
  const x: { [key: string]: any } = {};
  for (const glyph of Object.keys(MaterialCommunityIcons.glyphMap)) {
    x[glyph] = IconProvider(glyph);
  }
  return x;
}

export const MaterialCommunityIconsPack = {
  name: "mci",
  icons: createIconsMap(),
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      staleTime: 900000,
    },
  },
});

function AppB() {
  const colorScheme = useColorScheme();
  const [settings] = useSettings();
  const theme = themes[settings.theme];
  return (
    <>
      {Platform.OS === "web" && (
        <style>{`*::-webkit-scrollbar {width: 8px;height:8px;}
          *::-webkit-scrollbar-thumb {background-color: ${
            theme.style === "dark" ? theme["color-basic-1100"] : theme["color-basic-400"]
          };border-radius: 8px;}`}</style>
      )}
      <IconRegistry icons={MaterialCommunityIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
      </ApplicationProvider>
    </>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts(MaterialCommunityIcons.font);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaProvider>
      <JotaiProvider>
        <QueryClientProvider client={queryClient}>
          <AppB />
        </QueryClientProvider>
      </JotaiProvider>
    </SafeAreaProvider>
  );
}
