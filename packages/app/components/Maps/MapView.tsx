import React from "react";
import * as Location from "expo-location";
import TypeImage, { getRemoteTypeImage, getTypeImage } from "../Common/TypeImage";
import { Button, Icon, useTheme } from "@ui-kitten/components";
import { useSettings } from "../../hooks/useSettings";
import MapStyleDark from "./MapStyleDark.json";

import MapboxGL from "@react-native-mapbox-gl/maps";
import { View } from "react-native";

MapboxGL.setAccessToken(
  "pk.eyJ1Ijoic29oY2FoIiwiYSI6ImNqeWVqcm8wdTAxc2MzaXFpa282Yzd2aHEifQ.afYbt2sVMZ-kbwdx5_PekQ"
);

export type MapProps = {
  latitude: number;
  longitude: number;
  zoom?: number;
  cluster?: boolean;
  clusterRadius?: number;
  clusterMaxZoomLevel?: number;
  markers?: MapMarkerProps[];
  circles?: MapCircle[];
  onRegionChange?: (props: { latitude: number; longitude: number }) => void;
};

export type MapCircle = {
  id: string;
  lat: number;
  lng: number;
  radius: number;
  fill: string;
  stroke: string;
};

export type MapMarkerProps = {
  id: string;
  lat: number;
  lng: number;
  icon: string;
};

function getImages(markers: MapMarkerProps[]) {
  return Array.from(new Set(markers.map(i => i.icon))).reduce(
    (a, b) => ({
      ...a,
      [b]: getTypeImage(b, 64),
    }),
    {}
  );
}

const MapMarker = React.memo(function (props: MapMarkerProps) {
  return (
    <MapboxGL.MarkerView
      id={props.id}
      coordinate={[props.lat, props.lng]}
      anchor={{ x: 0.5, y: 1 }}>
      <TypeImage icon={props.icon} style={{ size: 48 }} />
    </MapboxGL.MarkerView>
  );
});

export default function MapView(props: MapProps) {
  const theme = useTheme();
  const [{ maps }] = useSettings();
  const center = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 90,
    longitudeDelta: 90,
  };
  const mapRef = React.useRef<MapboxGL.MapView | null>();
  const camRef = React.useRef<MapboxGL.Camera | null>();
  const [locError, setLocError] = React.useState(false);
  async function getLocation() {
    var { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setLocError(true);
      return;
    }
    try {
      var loc = await Location.getCurrentPositionAsync({});
      camRef.current?.flyTo([loc.coords.longitude, loc.coords.latitude]);
    } catch (e) {
      setLocError(true);
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <MapboxGL.MapView
        style={{ flex: 1 }}
        ref={r => (mapRef.current = r)}
        onRegionDidChange={region => {
          props.onRegionChange?.({
            latitude: region.geometry.coordinates[1],
            longitude: region.geometry.coordinates[0],
          });
        }}>
        <MapboxGL.UserLocation />
        <MapboxGL.Camera
          ref={r => (camRef.current = r)}
          zoomLevel={props.zoom}
          centerCoordinate={[props.latitude, props.longitude]}
        />
        <MapboxGL.Images images={getImages(props.markers ?? [])} />
        {props.circles && (
          <MapboxGL.ShapeSource
            id="circles_source"
            shape={{
              type: "FeatureCollection",
              features: props.circles.map(i => ({
                type: "Feature",
                id: i.id,
                properties: i,
                geometry: {
                  type: "Point",
                  coordinates: [i.lng, i.lat],
                },
              })),
            }}>
            <MapboxGL.CircleLayer
              id="circles"
              style={{
                circleRadius: ["get", "radius"],
                circleColor: ["get", "fill"],
                circleStrokeColor: ["get", "stroke"],
              }}
            />
          </MapboxGL.ShapeSource>
        )}
        {props.markers && (
          <MapboxGL.ShapeSource
            id="circles_source"
            cluster={props.cluster}
            clusterRadius={props.clusterRadius}
            clusterMaxZoomLevel={props.clusterMaxZoomLevel}
            shape={{
              type: "FeatureCollection",
              features: props.markers.map(i => ({
                type: "Feature",
                id: i.id,
                properties: {
                  ...i,
                  image: getRemoteTypeImage(i.icon, 64),
                },
                geometry: {
                  type: "Point",
                  coordinates: [i.lng, i.lat],
                },
              })),
            }}>
            <MapboxGL.SymbolLayer
              id="pointCount"
              style={{
                textField: "{point_count}",
                textSize: 12,
                textPitchAlignment: "map",
              }}
            />

            <MapboxGL.CircleLayer
              id="clusteredPoints"
              belowLayerID="pointCount"
              filter={["has", "point_count"]}
              style={{
                circlePitchAlignment: "map",

                circleColor: [
                  "step",
                  ["get", "point_count"],
                  "#51bbd6",
                  100,
                  "#f1f075",
                  750,
                  "#f28cb1",
                ],

                circleRadius: ["step", ["get", "point_count"], 20, 100, 30, 750, 40],

                circleOpacity: 0.84,
                circleStrokeWidth: 2,
                circleStrokeColor: "white",
              }}
            />
            <MapboxGL.SymbolLayer
              id="symbols"
              filter={["!", ["has", "point_count"]]}
              style={{
                iconSize: 0.4,
                iconAnchor: "bottom",
                iconImage: ["get", "icon"],
                iconAllowOverlap: true,
              }}
            />
          </MapboxGL.ShapeSource>
        )}
      </MapboxGL.MapView>
      <Button
        style={{ position: "absolute", top: 8, left: 8 }}
        size="small"
        accessoryLeft={props => <Icon name={true ? "crosshairs-gps" : "crosshairs"} {...props} />}
        onPress={getLocation}
      />
      {/* TODO: Replace Snackbar */}
      {/* <Snackbar
      visible={locError}
      onDismiss={() => setLocError(false)}
      duration={2000}
    >
      {typeof locError == "string" ? locError : "Failed retrieving location"}
    </Snackbar> */}
    </View>
  );
}
