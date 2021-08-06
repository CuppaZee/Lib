import { Button, Layout, Text, useTheme } from "@ui-kitten/components";
import * as React from "react";
import useCuppaZeeRequest from "../../hooks/useCuppaZeeRequest";
import useComponentSize from "../../hooks/useComponentSize";
import useTitle from "../../hooks/useTitle";
import { Platform, Pressable, ScrollView, View } from "react-native";
import { MunzeeSpecial, MunzeeSpecialBouncer } from "@cuppazee/api/munzee/specials";
import TypeImage from "../../components/Common/TypeImage";
import * as Location from "expo-location";
import * as Notifications from "expo-notifications";
import Loading from "../../components/Loading";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import Icon from "../../components/Common/Icon";
import { AutoMap, Icons, Layer, Marker, Source } from "../../components/Map/Map";
import useDB from "../../hooks/useDB";

type Bouncer = (MunzeeSpecialBouncer | MunzeeSpecial) & {
  hash: string;
  distance: number;
  direction: string;
  distanceStr: string;
  // location?: {
  //   record?: {
  //     name: string;
  //     latitude: number;
  //     longitude: number;
  //     countryCode: string;
  //   };
  //   distance: number;
  // };
  // timezone: string[];
};

interface NearbySettings {
  token?: string;
  latitude: number;
  longitude: number;
  accuracy: number | null;
}

export default function NearbyScreen() {
  const { t } = useTranslation();
  const nav = useNavigation();
  const locationRef = React.useRef<{ latitude: number; longitude: number } | null>(null);
  const [size, onLayout] = useComponentSize();
  const theme = useTheme();
  const [settings, setSettings] = React.useState<NearbySettings>();
  const [permissionError, setPermissionError] = React.useState(false);
  const db = useDB();
  useTitle(`☕ ${t("pages:tools_nearby")}`);
  const data = useCuppaZeeRequest<{
    data: Bouncer[];
    endpointsDown: { label: string; endpoint: string }[];
  }>("bouncers/nearby", settings ?? {}, settings !== undefined);

  React.useEffect(() => {
    (async () => {
      let perm;
      try {
        perm = await Location.requestForegroundPermissionsAsync();
        console.log(perm);
        if (perm.status === Location.PermissionStatus.DENIED) {
          setPermissionError(true);
        }
      } catch (e) {
        setPermissionError(true);
      }
      const loc = perm?.granted
        ? await Location.getCurrentPositionAsync()
        : {
            coords: {
              latitude: 0,
              longitude: 0,
              accuracy: 6378000,
            },
          };
      let token;
      if (Platform.OS !== "web") {
        try {
          token = (
            await Notifications.getExpoPushTokenAsync({
              experienceId: "@sohcah/PaperZee",
            })
          )?.data;
        } catch (e) {}
      }
      setSettings({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        accuracy: loc.coords.accuracy,
        token,
      });
    })();
  }, []);

  if (permissionError) {
    return (
      <Layout style={{ flex: 1 }} onLayout={onLayout}>
        <Text category="h6">You must accept location permissions to use this page.</Text>
      </Layout>
    );
  }

  if (!data.isFetched || !size || !settings) {
    return (
      <Layout style={{ flex: 1 }} onLayout={onLayout}>
        <Loading data={[data]} />
      </Layout>
    );
  }
  return (
    <Layout onLayout={onLayout} style={{ flex: 1, flexDirection: "row" }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 4 }}>
        {data.data?.endpointsDown
          .filter(i => i.endpoint.startsWith("/munzee/specials"))
          .map(endpoint => (
            <Layout style={{ margin: 4, width: "100%" }}>
              <Layout
                level="2"
                style={{
                  padding: 4,
                  borderRadius: 8,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Text category="h6" style={{ textAlign: "center", maxWidth: "100%" }}>
                  CuppaZee is currently unable to get data for {endpoint.label} from Munzee. These
                  bouncers may not show on this page.
                </Text>
              </Layout>
            </Layout>
          ))}
        {(settings.accuracy === null || settings.accuracy > 50) && (
          <Layout style={{ margin: 4, width: "100%" }}>
            <Layout
              level="2"
              style={{
                padding: 4,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Text category="h6" style={{ textAlign: "center", maxWidth: "100%" }}>
                {settings.accuracy === null || settings.accuracy < 5000000
                  ? `CuppaZee couldn't get a very accurate location. You can drag the location marker or use the "Search" tool along with the "Move Location Here" button to pick a better location.`
                  : `CuppaZee was unable to get your location. You can drag the location marker or use the "Search" tool along with the "Move Location Here" button to pick a location.`}
              </Text>
            </Layout>
          </Layout>
        )}
        <Layout style={{ height: 400, margin: 4, borderRadius: 8 }}>
          <AutoMap
            onPositionChange={ev => {
              locationRef.current = {
                latitude: ev.latitude,
                longitude: ev.longitude,
              };
            }}
            controls={
              <Button
                onPress={() => setSettings({ ...settings, ...(locationRef.current ?? {}) })}
                style={{ margin: 4 }}
                size="small"
                appearance="outline">
                Move Location Here
              </Button>
            }
            defaultViewport={{
              latitude: settings.latitude,
              longitude: settings.longitude,
              zoom: 10,
            }}
            onPress={point => {
              const munzee = point.features?.find(i => i.source === "bouncers");
              if (munzee) {
                nav.navigate("Tools", {
                  screen: "Munzee",
                  params: { a: munzee.id },
                });
              }
            }}>
            <Icons
              icons={Object.keys(
                data.data?.data.reduce(
                  (a, b) => ({
                    ...a,
                    [db.strip("logo" in b ? b.logo : b.mythological_munzee.munzee_logo)]: 1,
                  }),
                  {} as any
                ) ?? {}
              )}
            />
            <Source
              id="bouncers"
              type="geojson"
              data={{
                type: "FeatureCollection",
                features:
                  data.data?.data?.map(i => ({
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: [Number(i.longitude), Number(i.latitude)],
                    },
                    properties: {
                      icon: db.strip("logo" in i ? i.logo : i.mythological_munzee.munzee_logo),
                      id: i.munzee_id,
                    },
                  })) ?? [],
              }}>
              <Layer
                id="bouncers_symbols"
                type="symbol"
                paint={{}}
                layout={{
                  "icon-allow-overlap": true,
                  "icon-anchor": "bottom",
                  "icon-size": 0.8,
                  "icon-image": ["get", "icon"],
                }}
              />
            </Source>
            <Marker
              offsetLeft={-16}
              offsetTop={-16}
              id="location"
              latitude={settings.latitude}
              longitude={settings.longitude}
              draggable
              onDragEnd={ev => {
                setSettings({
                  ...settings,
                  latitude: ev.lngLat[1],
                  longitude: ev.lngLat[0],
                });
              }}>
              <View
                style={{
                  height: 32,
                  width: 32,
                  borderRadius: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#00aaff",
                }}>
                <Icon style={{ height: 24, width: 24, color: "black" }} name="crosshairs-gps" />
              </View>
            </Marker>
          </AutoMap>
        </Layout>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {data.data?.data
            .slice()
            .sort((a, b) => a.distance - b.distance)
            .map(i => (
              <Pressable
                key={i.hash}
                onPress={() =>
                  nav.navigate("Tools", {
                    screen: "Munzee",
                    params: {
                      a: i.munzee_id,
                    },
                  })
                }
                style={{
                  width: 400,
                  maxWidth: "100%",
                  flexGrow: 1,
                }}>
                <Layout
                  level="2"
                  style={{
                    margin: 4,
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 8,
                    flex: 1,
                  }}>
                  <View style={{ padding: 4 }}>
                    <TypeImage
                      icon={"logo" in i ? i.logo : i.mythological_munzee.munzee_logo}
                      style={{ size: 48 }}
                    />
                  </View>
                  <View style={{ padding: 4, flex: 1 }}>
                    <Text category="h6">
                      {"mythological_munzee" in i
                        ? i.mythological_munzee.friendly_name
                        : db.getType(i.logo)?.name ?? i.logo.slice(49, -4)}
                      {"mythological_munzee" in i ? (
                        <Text category="s1">
                          {" "}
                          {t("user_bouncers:by", {
                            username: i.mythological_munzee.creator_username,
                          })}
                        </Text>
                      ) : (
                        ""
                      )}
                    </Text>

                    <Text category="s1">
                      {t("user_bouncers:host", {
                        name: i.friendly_name,
                        creator: i.full_url.split("/")[4],
                      })}
                    </Text>
                    <Text category="c1">
                      {t("user_bouncers:expires", {
                        time: dayjs(i.special_good_until * 1000).format("LTS"),
                      })}
                    </Text>
                  </View>
                  <Layout
                    level="4"
                    style={{
                      padding: 4,
                      borderTopRightRadius: 8,
                      borderBottomRightRadius: 8,
                      alignSelf: "stretch",
                      width: 80,
                      justifyContent: "center",
                    }}>
                    <Text style={{ textAlign: "center" }} category="h6">
                      {i.distanceStr}
                    </Text>
                    <Text style={{ textAlign: "center" }} category="s1">
                      <Icon
                        name={
                          (
                            {
                              N: "arrow-up-thick",
                              NW: "arrow-top-left-thick",
                              NE: "arrow-top-right-thick",
                              W: "arrow-left-thick",
                              E: "arrow-right-thick",
                              SW: "arrow-bottom-left-thick",
                              SE: "arrow-bottom-right-thick",
                              S: "arrow-down-thick",
                            } as const
                          )[
                            i.direction.slice(2) as
                              | "N"
                              | "NE"
                              | "NW"
                              | "E"
                              | "W"
                              | "SE"
                              | "SW"
                              | "S"
                          ]
                        }
                        style={{ color: theme["text-basic-color"], height: 20, width: 20 }}
                      />
                      {t(
                        `common:direction_${
                          i.direction.slice(2).toLowerCase() as
                            | "n"
                            | "ne"
                            | "nw"
                            | "e"
                            | "w"
                            | "se"
                            | "sw"
                            | "s"
                        }` as const
                      )}
                    </Text>
                  </Layout>
                </Layout>
              </Pressable>
            ))}
        </View>
      </ScrollView>
    </Layout>
  );
}
