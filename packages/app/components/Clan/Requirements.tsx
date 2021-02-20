import { Icon, Layout, Spinner, Text, useTheme } from "@ui-kitten/components";
import dayjs from "dayjs";
import React from "react";
import { useTranslation } from "react-i18next";
import { PixelRatio, ScrollView, StyleSheet, useWindowDimensions, View } from "react-native";
import { LevelCell, RequirementCell, RequirementDataCell, RequirementTitleCell } from "./Cell";
import {
  ClanRequirementsConverter,
  ClanRewardsData,
  gameIDToMonth,
} from "../../components/Clan/Data";
import useComponentSize from "../../hooks/useComponentSize";
import useCuppaZeeRequest from "../../hooks/useCuppaZeeRequest";
import useMunzeeRequest from "../../hooks/useMunzeeRequest";
import { useSettings } from "../../hooks/useSettings";
import SyncScrollView, { SyncScrollViewController } from "./SyncScrollView";
import Loading from "../Loading";
import { useIsFetching, useQueryClient } from "react-query";

const levels: { level: number; type: "group" | "individual" }[] = [
  { level: 1, type: "individual" },
  { level: 1, type: "group" },

  { level: 2, type: "individual" },
  { level: 2, type: "group" },

  { level: 3, type: "individual" },
  { level: 3, type: "group" },

  { level: 4, type: "individual" },
  { level: 4, type: "group" },

  { level: 5, type: "individual" },
  { level: 5, type: "group" },
];

export interface ClanRequirementsTableProps {
  game_id: number;
  clan_id?: number;
  scrollViewController?: SyncScrollViewController;
}

function Countdown({ time }: { time: number }) {
  const [now, setNow] = React.useState(Date.now());
  const { width } = useWindowDimensions();
  const queryClient = useQueryClient();
  const dur = dayjs.duration(Math.max(0, time - now));
  React.useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 100);
    return () => clearInterval(interval);
  }, []);
  React.useEffect(() => {
    if (time - now < 0) {
      queryClient.refetchQueries({
        predicate: query => query.queryKey[0] !== "token",
        active: true,
      });
    }
  }, [time - now < 0]);
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      {((width >= 400 ? ["days", "hours", "minutes", "seconds"] : ["days", "hours", "minutes"]) as (
        | "days"
        | "hours"
        | "minutes"
        | "seconds"
      )[]).map(i => (
        <Layout
          level="4"
          style={{
            height: 80,
            width: 80,
            margin: 8,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text category="h1">{Math.floor(dur[i === "days" ? "asDays" : i]())}</Text>
          <Text category="s1">{i.toUpperCase()}</Text>
        </Layout>
      ))}
    </View>
  );
}

export default React.memo(
  function ClanRequirementsTable({
    game_id,
    clan_id: actual_clan_id = 2041,
    scrollViewController,
  }: ClanRequirementsTableProps) {
    const { t } = useTranslation();
    const [size, onLayout] = useComponentSize();
    const fontScale = PixelRatio.getFontScale();
    const [settings] = useSettings();
    const reverse = settings.clan_reverse;
    const compact = settings.clan_style;

    const theme = useTheme();
    const borderColor =
      (theme.style === "dark" ? theme["color-basic-400"] : theme["color-basic-800"])
        .replace("rgb(", "rgba(")
        .slice(0, -1) + ", 0.3)";

    const clan_id = actual_clan_id >= 0 ? actual_clan_id : 2041;

    const requirements_data = useMunzeeRequest("clan/v2/requirements", {
      clan_id,
      game_id,
    });

    const rewards_data = useCuppaZeeRequest<{ data: ClanRewardsData }>("clan/rewards", {
      game_id,
    });

    const requirements = React.useMemo(
      () => ClanRequirementsConverter(requirements_data.data?.data, rewards_data.data?.data),
      [requirements_data.dataUpdatedAt, rewards_data.dataUpdatedAt]
    );

    if (requirements_data.data?.data?.data.levels.length === 0) {
      const time = requirements_data.data.data.battle.reveal_at * 1000;
      return <Countdown time={time} />;
    }

    if (!requirements || !size) {
      return (
        <Layout style={{ flex: 1 }} onLayout={onLayout}>
          <Loading data={[requirements_data, rewards_data]} />
        </Layout>
      );
    }

    const headerStack = compact !== 0;
    const showSidebar = compact !== 0;
    const sidebarWidth = (compact ? 120 : 150) * fontScale;
    const columnWidth = showSidebar
      ? (compact ? (headerStack ? 68 : 90) : headerStack ? 80 : 120) * fontScale
      : 400;
    const minTableWidth = requirements.all.length * columnWidth + sidebarWidth;

    const requirements_rows = (reverse ? requirements.all : levels) as (
      | number
      | { type: "group" | "individual"; level: number }
    )[];
    const requirements_columns = (reverse ? levels : requirements.all) as (
      | number
      | { type: "group" | "individual"; level: number }
    )[];
    return (
      <Layout onLayout={onLayout} level="2" style={{ margin: 4, borderRadius: 8 }}>
        <Layout
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 48 * fontScale,
            padding: 4,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
          level="4">
          <Icon
            style={{
              height: 32 * fontScale,
              width: 32 * fontScale,
              marginRight: 8,
              color: theme.style === "dark" ? "#fff" : "#000",
            }}
            name="playlist-check"
          />
          <View>
            <Text category="h6">{t("clan:clan_requirements")}</Text>
            <Text category="s1">
              {dayjs()
                .set("month", gameIDToMonth(game_id).m)
                .set("year", gameIDToMonth(game_id).y)
                .format("MMMM YYYY")}
            </Text>
          </View>
        </Layout>
        <View style={{ flexDirection: "row" }}>
          {showSidebar && (
            <View
              key="sidebar"
              style={{
                minWidth: sidebarWidth,
                flex: size.width < minTableWidth ? undefined : 1,
                borderRightWidth: 2,
                borderColor,
              }}>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor,
                }}>
                <RequirementTitleCell
                  key="header"
                  game_id={game_id}
                  date={dayjs()
                    .set("month", gameIDToMonth(game_id).m)
                    .set("year", gameIDToMonth(game_id).y)}
                />
              </View>
              {requirements_rows.map(row =>
                typeof row == "number" ? (
                  <RequirementCell key={row} task_id={row} requirements={requirements} />
                ) : (
                  <LevelCell key={`${row.level}_${row.type}`} level={row.level} type={row.type} />
                )
              )}
            </View>
          )}
          <SyncScrollView
            controller={scrollViewController}
            style={{
              flex: (reverse ? levels : requirements.all).length,
            }}
            contentContainerStyle={{ flexGrow: 1 }}
            horizontal={true}
            pagingEnabled={size.width < 720 || size.width < minTableWidth}
            snapToInterval={columnWidth}
            snapToAlignment={showSidebar || !reverse ? "start" : "center"}>
            {requirements_columns.map(column => (
              <View
                key={typeof column === "number" ? column : `${column.level}_${column.type}`}
                style={{
                  width: columnWidth,
                  flexGrow: 1,
                  maxWidth: size?.width,
                }}>
                <View
                  style={{
                    borderBottomWidth: 2,
                    borderColor,
                  }}>
                  {typeof column === "number" ? (
                    <RequirementCell
                      key="header"
                      task_id={column}
                      stack={headerStack}
                      requirements={requirements}
                    />
                  ) : (
                    <LevelCell
                      key="header"
                      level={column.level}
                      type={column.type}
                      stack={headerStack}
                    />
                  )}
                </View>
                {requirements_rows.map(row => {
                  if (typeof row !== "number" && typeof column === "number") {
                    return (
                      <RequirementDataCell
                        key={`${row.level}_${row.type}`}
                        task={column}
                        level={row.level}
                        type={row.type}
                        requirements={requirements}
                      />
                    );
                  }
                  if (typeof row === "number" && typeof column !== "number") {
                    return (
                      <RequirementDataCell
                        key={row}
                        task={row}
                        level={column.level}
                        type={column.type}
                        requirements={requirements}
                      />
                    );
                  }
                  return null;
                })}
              </View>
            ))}
          </SyncScrollView>
        </View>
      </Layout>
    );
  },
  (prev, now) => prev.clan_id === now.clan_id && prev.game_id === now.game_id
);

const styles = StyleSheet.create({
  card: {
    margin: 4,
    borderRadius: 8,
  },
});
