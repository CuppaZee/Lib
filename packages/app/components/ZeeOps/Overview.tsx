import React from "react";
import { Icon, Layout, Text, useTheme } from "@ui-kitten/components";
import { Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useMunzeeRequest from "../../hooks/useMunzeeRequest";
import dayjs from "dayjs";
import Svg, { Text as SvgText } from "react-native-svg";
import { useTranslation } from "react-i18next";
import Loading from "../Loading";
import TypeImage from "../Common/TypeImage";

export type ZeeOpsOverviewProps = {
  user_id: number;
};

export default function ZeeOpsOverview({ user_id }: ZeeOpsOverviewProps) {
  const theme = useTheme();
  const { t } = useTranslation();
  const data = useMunzeeRequest("ops/zeeops/status", { user_id }, true, user_id);
  if (data.tokenStatus.status !== "valid") return null;
  if (!data.data?.data) {
    return <Loading data={[data]} />;
  }
  const d = data.data.data;
  let current = d.missions.find(i => i.id === d.currentMission);
  if (dayjs(d.start_time).valueOf() > Date.now() && d.currentMission === 1) {
    return (
      <View
        style={{
          height: 48,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}>
        <Icon
          name="check"
          style={{ height: 24, width: 24, marginRight: 8, color: theme["text-success-color"] }}
        />
        <Text status="success" category="h6">
          Daily ZeeOp Complete
        </Text>
      </View>
    );
  } else if (dayjs.mhqParse(d.start_time).valueOf() > Date.now()) {
    current = d.missions.find(i => i.id === d.currentMission - 1);
  }
  if (!current) return null;
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 4,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <View>
        <TypeImage
          style={{ size: 36, margin: 4 }}
          icon={current?.rewards[0].imageUrl.slice(0, -4)}
        />
        {current?.rewards[0].amount > 1 && (
          <Text style={{ textAlign: "center", marginTop: -4 }} category="c1">
            x{current?.rewards[0].amount}
          </Text>
        )}
      </View>
      <View style={{ flex: 1, maxWidth: 400 }}>
        <Text category="s1" style={{ padding: 4 }}>
          {current?.description}
        </Text>
        <Layout level="4" style={{ borderRadius: 8 }}>
          <LinearGradient
            start={[0, 0.5]}
            end={[1, 0.5]}
            locations={[
              0,
              (current.rewardCollected ? current.goal : current?.progress) / current.goal,
              (current.rewardCollected ? current.goal : current?.progress) / current.goal + 0.0001,
              1,
            ]}
            colors={[
              theme["text-success-color"] + "66",
              theme["text-success-color"] + "66",
              "transparent",
              "transparent",
            ]}
            style={{
              padding: 4,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: theme["border-basic-color-1"],
            }}>
            <Text category="s1" style={{ textAlign: "center" }}>
              {current.rewardCollected
                ? t("user_zeeops:collected")
                : `${current?.progress}/${current?.goal}`}
            </Text>
          </LinearGradient>
        </Layout>
      </View>
    </View>
  );
}
