import { Layout, Text, useTheme } from "@ui-kitten/components";
import React, { PropsWithChildren } from "react";
import {
  Image,
  ImageSourcePropType,
  PixelRatio,
  Pressable,
  PressableProps,
  StyleSheet,
  View,
} from "react-native";
import {
  ClanStatsFormattedUser,
  ClanStatsFormattedData,
  requirementMeta,
  ClanShadowData,
  ClanStatsFormattedRequirements,
  ClanRewardsData,
} from "./Data";
import { ClanV2 } from "@cuppazee/api/clan/main";
import { Dayjs } from "dayjs";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { useUserBookmarks } from "../../hooks/useBookmarks";
import useSetting, { ClanPersonalisationAtom, ClansAtom } from "../../hooks/useSetting";
import Icon, { IconName } from "../Common/Icon";

export function pickTextColor(
  bgColor: string,
  lightColor: string = "#fff",
  darkColor: string = "#000"
) {
  var color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  var uicolors = [r / 255, g / 255, b / 255];
  var c = uicolors.map(col => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return L > 0.179 ? darkColor : lightColor;
}

function PressWrapper(props: PropsWithChildren<PressableProps>) {
  if (props.onPress) {
    return <Pressable {...props} />;
  }
  return <>{props.children}</>;
}

export interface CommonCellProps {
  type: "title" | "header" | "header_stack" | "data";
  color?: number;
  image?: ImageSourcePropType;
  icon?: IconName;
  title?: string;
  titleBold?: boolean;
  titleIcon?: IconName;
  subtitle?: string;
  clanStyle?: typeof ClanPersonalisationAtom["init"]["data"];
  onPress?: () => void;
}

export const CommonCell = React.memo(function (props: CommonCellProps) {
  const [styleValue] = useSetting(ClanPersonalisationAtom);
  const style = props.clanStyle ?? styleValue;
  const theme = useTheme();

  const fontScale = PixelRatio.getFontScale();

  const isCompact = style.style >= 2;
  const isStack = props.type === "title" || props.type === "header_stack";
  const isSingleLine = style.single_line && !isStack;
  const imageSize = (isSingleLine ? 0.75 : 1) * (isCompact ? 24 : 32) * fontScale;
  const iconSize = (isSingleLine ? 16 : 24) * fontScale;
  const iconMargin = (isCompact ? 4 : 8) * fontScale;

  const height =
    {
      title: isCompact ? 69 : 77,
      header_stack: isCompact ? 69 : 77,
      header: isSingleLine ? (isCompact ? 26 : 32) : isCompact ? 34 : 40,
      data: isSingleLine ? (isCompact ? 26 : 32) : isCompact ? 34 : 40,
    }[props.type] * fontScale;

  return (
    <PressWrapper onPress={props.onPress}>
      <Layout
        level={isCompact ? "2" : "3"}
        style={[
          isCompact ? {} : styles.card,
          {
            height,
            flexDirection: isStack ? "column" : "row",
            alignItems: "center",
            opacity: props.color === -1 && !style.full_background ? 0.4 : 1,
          },
          props.color !== undefined && style.full_background
            ? { backgroundColor: style.colours[props.color] ?? "#aaaaaa" }
            : props.color !== undefined
            ? { backgroundColor: (style.colours[props.color] ?? "#aaaaaa") + "22" }
            : undefined,
        ]}>
        {props.color !== undefined && !isStack && !style.full_background && (
          <View
            style={{
              width: 4 * fontScale,
              alignSelf: "stretch",
              borderTopLeftRadius: isCompact ? 0 : 8,
              borderBottomLeftRadius: isCompact ? 0 : 8,
              backgroundColor: style.colours[props.color] ?? "#aaaaaa",
            }}
          />
        )}
        {props.image && (
          <Image
            source={props.image}
            style={{
              width: imageSize,
              height: imageSize,
              borderRadius:
                typeof props.image === "object" &&
                "uri" in props.image &&
                (props.image.uri?.includes("/avatars/ua") ||
                  props.image.uri?.includes("/clan_logos/"))
                  ? imageSize / 2
                  : 0,
              margin: 4 * fontScale,
            }}
          />
        )}
        {props.icon && (
          <View style={isStack ? { marginVertical: iconMargin } : {}}>
            <Icon
              style={{
                width: iconSize,
                height: iconSize,
                marginHorizontal: iconMargin,
                color:
                  props.color !== undefined && style.full_background
                    ? pickTextColor(style.colours[props.color] ?? "#aaaaaa")
                    : theme.style === "dark"
                    ? "#fff"
                    : "#000",
              }}
              name={props.icon}
            />
          </View>
        )}
        <View
          style={{
            padding: 4,
            paddingVertical: 0,
            flex: 1,
            alignItems: isStack ? "center" : "stretch",
            maxWidth: "100%",
          }}>
          {props.title && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: !!props.subtitle ? "flex-start" : "center",
                maxWidth: "100%",
              }}>
              {props.titleIcon && (
                <Icon
                  name={props.titleIcon}
                  style={{ height: 12, width: 12, color: theme["text-basic-color"] }}
                />
              )}
              <Text
                style={[
                  props.color !== undefined && style.full_background
                    ? { color: pickTextColor(style.colours[props.color] ?? "#aaaaaa") }
                    : undefined,
                  {
                    textAlign: !!props.subtitle ? "left" : "center",
                    marginLeft:
                      !!props.subtitle ||
                      !(props.color !== undefined && !isStack && !style.full_background)
                        ? 0
                        : -4,
                    flexShrink: 1,
                  },
                ]}
                numberOfLines={1}
                ellipsizeMode="tail"
                category={props.type !== "data" || props.titleBold ? "s2" : "p2"}>
                {props.title}
              </Text>
            </View>
          )}
          {!isSingleLine && props.subtitle && (
            <Text
              style={
                props.color !== undefined && style.full_background
                  ? { color: pickTextColor(style.colours[props.color] ?? "#aaaaaa") }
                  : undefined
              }
              numberOfLines={1}
              ellipsizeMode="tail"
              category="c1">
              {props.subtitle}
            </Text>
          )}
        </View>
        {props.color !== undefined && isStack && !style.full_background && (
          <View
            style={{
              height: 4 * fontScale,
              width: 45 * fontScale,
              borderTopLeftRadius: isCompact ? 0 : 8,
              borderBottomLeftRadius: isCompact ? 0 : 8,
              backgroundColor: style.colours[props.color] ?? "#aaaaaa",
            }}
          />
        )}
      </Layout>
    </PressWrapper>
  );
});

export interface DataCellProps {
  user: ClanStatsFormattedUser | ClanStatsFormattedData | null;
  task_id: number;
  clan_id: number;
  requirements: ClanStatsFormattedRequirements;
}

export function DataCell(props: DataCellProps) {
  const [users] = useUserBookmarks();
  const [options] = useSetting(ClansAtom);
  const [style] = useSetting(ClanPersonalisationAtom);
  const { t } = useTranslation();

  const opt = options[props.clan_id];
  let text;
  let level;
  if (
    props.user?.requirements[props.task_id]?.value === undefined ||
    props.user?.requirements[props.task_id]?.value === null
  ) {
    text = "🚫";
  } else if (opt?.subtract) {
    text = Math.max(
      0,
      (props.requirements.tasks["username" in props.user ? "individual" : "group"][props.task_id]?.[
        opt.level
      ] ?? 0) - (props.user.requirements[props.task_id].value ?? 0)
    ).toLocaleString();
    level =
      (props.user?.requirements[props.task_id]?.level ?? 0) >= opt.level
        ? opt.level
        : props.user?.requirements[props.task_id]?.level === -1
        ? -1
        : 0;
  } else {
    text = (props.user.requirements[props.task_id].value ?? 0).toLocaleString();
    level = props.user?.requirements[props.task_id]?.level;
  }

  if (style.style === 0) {
    return (
      <CommonCell
        type="data"
        color={level}
        icon={!props.user || "username" in props.user ? undefined : "shield-half-full"}
        image={
          !props.user || "username" in props.user
            ? {
                uri:
                  props.user && "username" in props.user
                    ? `https://munzee.global.ssl.fastly.net/images/avatars/ua${props.user.user_id.toString(
                        36
                      )}.png`
                    : `https://server.cuppazee.app/requirements/${props.task_id}.png`,
              }
            : undefined
        }
        title={
          style.reverse
            ? `${requirementMeta[props.task_id]?.top} ${requirementMeta[props.task_id]?.bottom}`
            : props.user && "username" in props.user
            ? props.user.username ?? ""
            : t("clan:group_total")
        }
        titleBold={users.some(i =>
          props.user && "user_id" in props.user ? i.user_id === props.user?.user_id.toString() : false
        )}
        subtitle={text}
      />
    );
  }
  return (
    <CommonCell
      type="data"
      color={level}
      title={text}
      titleBold={users.some(i =>
        props.user && "user_id" in props.user ? i.user_id === props.user?.user_id.toString() : false
      )}
    />
  );
}

export interface RequirementDataCellProps {
  requirements?: ClanStatsFormattedRequirements;
  level: number;
  task: number;
  type: "individual" | "group" | "share";
  members?: number;
}

export function RequirementDataCell(props: RequirementDataCellProps) {
  const [style] = useSetting(ClanPersonalisationAtom);
  const { t } = useTranslation();

  const count =
    props.type === "share"
      ? Math.ceil(
          Math.max(
            props.requirements?.tasks.individual[props.task]?.[props.level] ?? 0,
            (props.requirements?.tasks.group[props.task]?.[props.level] ?? 0) / (props.members ?? 1)
          )
        )
      : props.requirements?.tasks[props.type][props.task]?.[props.level];

  if (style.style === 0) {
    return (
      <CommonCell
        type="data"
        color={props.level}
        icon={
          style.reverse
            ? undefined
            : props.type === "individual"
            ? "account-check"
            : props.type === "share"
            ? "percent"
            : "shield-check"
        }
        image={
          style.reverse
            ? {
                uri: `https://server.cuppazee.app/requirements/${props.task}.png`,
              }
            : undefined
        }
        title={
          style.reverse
            ? `${requirementMeta[props.task]?.top} ${requirementMeta[props.task]?.bottom}`
            : t(`clan:${props.type}_level` as const, { level: props.level })
        }
        subtitle={count?.toString() ?? "-"}
      />
    );
  }

  return <CommonCell type="data" color={props.level} title={count?.toString() ?? "-"} />;
}

export type UserCellProps = {
  user: ClanStatsFormattedUser | ClanStatsFormattedData;
  stack?: boolean;
};

export function UserCell(props: UserCellProps) {
  const nav = useNavigation();
  const { t } = useTranslation();
  return (
    <CommonCell
      onPress={"user_id" in props.user ? (() => nav.navigate("User", {
        screen: "Profile",
        params: {
          username: "user_id" in props.user ? props.user.username : "",
        }
      })) : undefined}
      type={props.stack ? "header_stack" : "header"}
      color={props.user.level}
      image={
        "user_id" in props.user
          ? {
              uri: `https://munzee.global.ssl.fastly.net/images/avatars/ua${props.user.user_id.toString(
                36
              )}.png`,
            }
          : undefined
      }
      icon={"user_id" in props.user ? undefined : "shield-half-full"}
      titleIcon={
        "user_id" in props.user
          ? props.user.shadow
            ? "ghost"
            : props.user.admin
            ? "hammer"
            : undefined
          : undefined
      }
      title={"user_id" in props.user ? props.user.username ?? "" : "Clan Total"}
      subtitle={t("clan:level", { level: props.user.level })}
    />
  );
}

export type LevelCellProps = {
  level: number;
  type: "individual" | "group" | "share";
  stack?: boolean;
};

export function LevelCell(props: LevelCellProps) {
  const { t } = useTranslation();
  const [style] = useSetting(ClanPersonalisationAtom);
  return (
    <CommonCell
      type={props.stack ? "header_stack" : "header"}
      color={props.level}
      icon={props.type === "individual" ? "account-check" : "shield-check"}
      title={t(
        style.single_line && !props.stack
          ? props.type === "individual"
            ? "clan:individual_level"
            : props.type === "share"
            ? "clan:share_level"
            : "clan:group_level"
          : "clan:level",
        { level: props.level }
      )}
      subtitle={t(`clan:${props.type}` as const)}
    />
  );
}

export type TitleCellProps = {
  clan: ClanV2["response"];
  shadow?: { data?: ClanShadowData };
};

export function TitleCell(props: TitleCellProps) {
  const { t } = useTranslation();
  return (
    <CommonCell
      type="title"
      image={{
        uri: `https://munzee.global.ssl.fastly.net/images/clan_logos/${props.clan.data?.details.clan_id.toString(
          36
        )}.png`,
      }}
      title={props.clan.data?.details.name ?? t("clan:loading")}
      subtitle={`#${props.clan.data?.result.rank}`}
    />
  );
}

export type RequirementTitleCellProps = {
  game_id: number;
  date: Dayjs;
};

export function RequirementTitleCell(props: RequirementTitleCellProps) {
  const { t } = useTranslation();
  return (
    <CommonCell
      type="title"
      icon="playlist-check"
      title={t("clan:requirements")}
      subtitle={props.date.format("MMM YYYY")}
    />
  );
}

export type RewardTitleCellProps = {
  game_id: number;
  date: Dayjs;
};

export function RewardTitleCell(props: RewardTitleCellProps) {
  const { t } = useTranslation();
  return (
    <CommonCell
      type="title"
      icon="gift"
      title={t("clan:rewards")}
      subtitle={props.date.format("MMM YYYY")}
    />
  );
}

export type RequirementCellProps = {
  task_id: number;
  stack?: boolean;
  requirements: ClanStatsFormattedRequirements;
  onPress?: () => void;
  sortBy?: number;
};

export function RequirementCell(props: RequirementCellProps) {
  const [style] = useSetting(ClanPersonalisationAtom);
  const g = props.requirements.group.includes(props.task_id);
  const i = props.requirements.individual.includes(props.task_id);
  return (
    <CommonCell
      onPress={props.onPress}
      type={props.stack ? "header_stack" : "header"}
      color={g ? (i ? 12 : 13) : 11}
      image={{ uri: `https://server.cuppazee.app/requirements/${props.task_id}.png` }}
      title={requirementMeta[props.task_id]?.top}
      titleIcon={
        props.sortBy && Math.abs(props.sortBy) === props.task_id
          ? props.sortBy > 0
            ? (`chevron-${style.reverse ? "right" : "down"}` as const)
            : (`chevron-${style.reverse ? "left" : "up"}` as const)
          : undefined
      }
      subtitle={requirementMeta[props.task_id]?.bottom}
    />
  );
}

export interface RewardDataCellProps {
  rewards: ClanRewardsData;
  level: number;
  reward_id: number;
  type: "individual" | "group";
}

export function RewardDataCell(props: RewardDataCellProps) {
  const [style] = useSetting(ClanPersonalisationAtom);
  const { t } = useTranslation();

  if (style.style === 0) {
    return (
      <CommonCell
        type="data"
        color={props.level}
        icon={
          style.reverse
            ? undefined
            : props.type === "individual"
            ? "account-check"
            : "shield-check"
        }
        image={
          style.reverse
            ? {
                uri: props.rewards.rewards[props.reward_id]?.logo,
              }
            : undefined
        }
        title={
          style.reverse
            ? props.rewards.rewards[props.reward_id]?.name
            : t(`clan:${props.type}_level` as const, { level: props.level })
        }
        subtitle={props.rewards.levels[props.level - 1][props.reward_id]?.toString() ?? "-"}
      />
    );
  }

  return (
    <CommonCell
      type="data"
      color={props.level}
      title={props.rewards?.levels[props.level - 1][props.reward_id]?.toString() ?? "-"}
    />
  );
}

export type RewardCellProps = {
  reward_id: number;
  stack?: boolean;
  rewards: ClanRewardsData;
};

export function RewardCell(props: RewardCellProps) {
  const [style] = useSetting(ClanPersonalisationAtom);
  if (style.single_line) {
    return (
      <CommonCell
        type={props.stack ? "header_stack" : "header"}
        image={{ uri: props.rewards.rewards[props.reward_id]?.logo }}
        title={props.rewards.rewards[props.reward_id]?.name}
      />
    );
  }
  const title = (props.rewards.rewards[props.reward_id]?.name || "").split(" ");
  let ts = [title.slice(0, -1).join(" "), title[title.length - 1]];
  if (title.length === 1) {
    ts = [title.join(" ")];
  } else if (title[1] === "Hammer") {
    ts = ["Hammer"];
  } else if (title[1] === "Axe") {
    ts = ["Battle Axe"];
  } else if (title.includes("Virtual") && title.includes("Color")) {
    ts = [title.filter(i => i !== "Virtual").join(" "), "Credit"];
  } else if (title.includes("Virtual")) {
    ts = [title.filter(i => i !== "Virtual").join(" "), "Virtual"];
  } else if (title.includes("Flat")) {
    ts = [title.filter(i => i !== "Flat").join(" "), "Flat"];
  }
  return (
    <CommonCell
      type={props.stack ? "header_stack" : "header"}
      image={{ uri: props.rewards.rewards[props.reward_id]?.logo }}
      title={ts[0]}
      subtitle={ts[1]}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 4,
    borderRadius: 8,
  },
});
