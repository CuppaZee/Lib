import {
  PointsInterface,
  TypeHidden,
  TypeID,
  TypeMeta,
  TypeState,
  TypeTags,
} from "../../munzee";

export default [
  {
    name: "Rose",
    icon: "rose",
    id: 1760,
    state: TypeState.Physical,
    stage: 5,
    base: "roseseed",
    hidden: [TypeHidden.Capture, TypeHidden.Deploy],
  },
  {
    name: "Tulip",
    icon: "tulip",
    id: 1761,
    state: TypeState.Physical,
    stage: 5,
    base: "tulipseed",
    hidden: [TypeHidden.Capture, TypeHidden.Deploy],
  },
  {
    name: "Lily",
    icon: "lily",
    id: 1774,
    state: TypeState.Physical,
    stage: 5,
    base: "lilyseed",
    hidden: [TypeHidden.Capture, TypeHidden.Deploy],
  },
  {
    name: "Tulip Seed",
    icon: "tulipseed",
    id: 1775,
    state: TypeState.Physical,
    stage: 1,
    base: "tulipseed",
  },
  {
    name: "Tulip Germination",
    icon: "tulipgermination",
    id: 1776,
    state: TypeState.Physical,
    stage: 2,
    base: "tulipseed",
  },
  {
    name: "Tulip Growth",
    icon: "tulipgrowth",
    id: 1777,
    state: TypeState.Physical,
    stage: 3,
    base: "tulipseed",
  },
  {
    name: "Tulip Bud",
    icon: "tulipbud",
    id: 1778,
    state: TypeState.Physical,
    stage: 4,
    base: "tulipseed",
  },
  {
    name: "Blue Tulip Blossom",
    icon: "bluetulipblossom",
    id: 1779,
    state: TypeState.Physical,
    stage: 5,
    base: "tulipseed",
  },
  {
    name: "Pink Tulip Blossom",
    icon: "pinktulipblossom",
    id: 1780,
    state: TypeState.Physical,
    stage: 5,
    base: "tulipseed",
  },
  {
    name: "White Tulip Blossom",
    icon: "whitetulipblossom",
    id: 1781,
    state: TypeState.Physical,
    stage: 5,
    base: "tulipseed",
  },
  {
    name: "Rose Seed",
    icon: "roseseed",
    id: 1782,
    state: TypeState.Physical,
    stage: 1,
    base: "roseseed",
  },
  {
    name: "Rose Germination",
    icon: "rosegermination",
    id: 1783,
    state: TypeState.Physical,
    stage: 2,
    base: "roseseed",
  },
  {
    name: "Rose Growth",
    icon: "rosegrowth",
    id: 1784,
    state: TypeState.Physical,
    stage: 3,
    base: "roseseed",
  },
  {
    name: "Rose Bud",
    icon: "rosebud",
    id: 1785,
    state: TypeState.Physical,
    stage: 4,
    base: "roseseed",
  },
  {
    name: "Red Rose Blossom",
    icon: "redroseblossom",
    id: 1786,
    state: TypeState.Physical,
    stage: 5,
    base: "roseseed",
  },
  {
    name: "Violet Rose Blossom",
    icon: "violetroseblossom",
    id: 1787,
    state: TypeState.Physical,
    stage: 5,
    base: "roseseed",
  },
  {
    name: "White Rose Blossom",
    icon: "whiteroseblossom",
    id: 1788,
    state: TypeState.Physical,
    stage: 5,
    base: "roseseed",
  },
  {
    name: "Yellow Rose Blossom",
    icon: "yellowroseblossom",
    id: 1789,
    state: TypeState.Physical,
    stage: 5,
    base: "roseseed",
  },
  {
    name: "Lily Seed",
    icon: "lilyseed",
    id: 1790,
    state: TypeState.Physical,
    stage: 1,
    base: "lilyseed",
  },
  {
    name: "Lily Germination",
    icon: "lilygermination",
    id: 1791,
    state: TypeState.Physical,
    stage: 2,
    base: "lilyseed",
  },
  {
    name: "Lily Growth",
    icon: "lilygrowth",
    id: 1792,
    state: TypeState.Physical,
    stage: 3,
    base: "lilyseed",
  },
  {
    name: "Lily Bud",
    icon: "lilybud",
    id: 1793,
    state: TypeState.Physical,
    stage: 4,
    base: "lilyseed",
  },
  {
    name: "Pink Lily Blossom",
    icon: "pinklilyblossom",
    id: 1794,
    state: TypeState.Physical,
    stage: 5,
    base: "lilyseed",
  },
  {
    name: "Violet Lily Blossom",
    icon: "violetlilyblossom",
    id: 1795,
    state: TypeState.Physical,
    stage: 5,
    base: "lilyseed",
  },
  {
    name: "White Lily Blossom",
    icon: "whitelilyblossom",
    id: 1796,
    state: TypeState.Physical,
    stage: 5,
    base: "lilyseed",
  },
  {
    name: "Carnation",
    icon: "carnation",
    id: 1797,
    state: TypeState.Virtual,
    stage: 5,
    base: "carnationseed",
    hidden: [TypeHidden.All],
  },
  {
    name: "Carnation Seed",
    icon: "carnationseed",
    id: 1798,
    state: TypeState.Virtual,
    stage: 1,
    base: "carnationseed",
    hidden: [TypeHidden.Deploy],
  },
  {
    name: "Carnation Germination",
    icon: "carnationgermination",
    id: 1799,
    state: TypeState.Virtual,
    stage: 2,
    base: "carnationseed",
  },
  {
    name: "Carnation Growth",
    icon: "carnationgrowth",
    id: 1800,
    state: TypeState.Virtual,
    stage: 3,
    base: "carnationseed",
  },
  {
    name: "Carnation Bud",
    icon: "carnationbud",
    id: 1801,
    state: TypeState.Virtual,
    stage: 4,
    base: "carnationseed",
  },
  {
    name: "Pink Carnation Blossom",
    icon: "pinkcarnationblossom",
    id: 1802,
    state: TypeState.Virtual,
    stage: 5,
    base: "carnationseed",
  },
  {
    name: "Red Carnation Blossom",
    icon: "redcarnationblossom",
    id: 1803,
    state: TypeState.Virtual,
    stage: 5,
    base: "carnationseed",
  },
  {
    name: "Violet Carnation Blossom",
    icon: "violetcarnationblossom",
    id: 1804,
    state: TypeState.Virtual,
    stage: 5,
    base: "carnationseed",
  },
  {
    name: "White Carnation Blossom",
    icon: "whitecarnationblossom",
    id: 1805,
    state: TypeState.Virtual,
    stage: 5,
    base: "carnationseed",
  },
  {
    name: "Yellow Carnation Blossom",
    icon: "yellowcarnationblossom",
    id: 1806,
    state: TypeState.Virtual,
    stage: 5,
    base: "carnationseed",
  },

  // Butterfly
  {
    name: "Butterfly Egg",
    icon: "butterflyegg",
    id: 1836,
    state: TypeState.Physical,
    stage: 1,
    base: "butterflyegg",
  },
  {
    name: "Caterpillar",
    icon: "caterpillar",
    id: 1837,
    state: TypeState.Physical,
    stage: 2,
    base: "butterflyegg",
  },
  {
    name: "Chrysalis",
    icon: "chrysalis",
    id: 1838,
    state: TypeState.Physical,
    stage: 3,
    base: "butterflyegg",
  },
  {
    name: "Hatched Chrysalis",
    icon: "hatchedchrysalis",
    id: 1839,
    state: TypeState.Physical,
    stage: 4,
    base: "butterflyegg",
  },
  {
    name: "Butterfly",
    icon: "butterfly",
    id: 1830,
    state: TypeState.Bouncer,
    lands_on: [
      "skyland",
      "farmer",
      "farmerandwife",
      "family",
      "pottedplant",
      "garden",
      "field",
      "peasplant",
      "carrotplant",
      "goldencarrotplant",
      "tomatoplant",
      "cornstalk",
      (type) =>
        ["tulipseed", "roseseed", "carnationseed", "lilyseed"].includes(
          type.meta.evolution_base || ""
        ) && (type.meta.evolution_stage || 0) >= 3,
      (type) => type.has_tag(TypeTags.TypeSeasonal),
      "trail",
      "munzee",
      "virtual_rainbow",
    ],
    stage: 5,
    base: "butterflyegg",
    hidden: [TypeHidden.Capture, TypeHidden.Deploy],
  },
  {
    name: "Morpho Butterfly",
    icon: "morphobutterfly",
    id: 1840,
    state: TypeState.Bouncer,
    lands_on: [
      "skyland",
      "farmer",
      "farmerandwife",
      "family",
      "pottedplant",
      "garden",
      "field",
      "peasplant",
      "carrotplant",
      "goldencarrotplant",
      "tomatoplant",
      "cornstalk",
      (type) =>
        ["tulipseed", "roseseed", "carnationseed", "lilyseed"].includes(
          type.meta.evolution_base || ""
        ) && (type.meta.evolution_stage || 0) >= 3,
      (type) => type.has_tag(TypeTags.TypeSeasonal),
      "trail",
      "munzee",
      "virtual_rainbow",
    ],
    stage: 5,
    base: "butterflyegg",
  },
  {
    name: "Monarch Butterfly",
    icon: "monarchbutterfly",
    id: 1841,
    state: TypeState.Bouncer,
    lands_on: [
      "skyland",
      "farmer",
      "farmerandwife",
      "family",
      "pottedplant",
      "garden",
      "field",
      "peasplant",
      "carrotplant",
      "goldencarrotplant",
      "tomatoplant",
      "cornstalk",
      (type) =>
        ["tulipseed", "roseseed", "carnationseed", "lilyseed"].includes(
          type.meta.evolution_base || ""
        ) && (type.meta.evolution_stage || 0) >= 3,
      (type) => type.has_tag(TypeTags.TypeSeasonal),
      "trail",
      "munzee",
      "virtual_rainbow",
    ],
    stage: 5,
    base: "butterflyegg",
  },
  {
    name: "Lime Butterfly",
    icon: "limebutterfly",
    id: 1842,
    state: TypeState.Bouncer,
    lands_on: [
      "skyland",
      "farmer",
      "farmerandwife",
      "family",
      "pottedplant",
      "garden",
      "field",
      "peasplant",
      "carrotplant",
      "goldencarrotplant",
      "tomatoplant",
      "cornstalk",
      (type) =>
        ["tulipseed", "roseseed", "carnationseed", "lilyseed"].includes(
          type.meta.evolution_base || ""
        ) && (type.meta.evolution_stage || 0) >= 3,
      (type) => type.has_tag(TypeTags.TypeSeasonal),
      "trail",
      "munzee",
      "virtual_rainbow",
    ],
    stage: 5,
    base: "butterflyegg",
  },

  // Frog
  {
    name: "Frog Egg",
    icon: "frogegg",
    id: 2106,
    state: TypeState.Physical,
    stage: 1,
    base: "frogegg",
  },
  {
    name: "Tadpole",
    icon: "tadpole",
    id: 2107,
    state: TypeState.Physical,
    stage: 2,
    base: "frogegg",
  },
  {
    name: "Pollywog",
    icon: "pollywog",
    id: 2108,
    state: TypeState.Physical,
    stage: 3,
    base: "frogegg",
  },
  {
    name: "Froglet",
    icon: "froglet",
    id: 2109,
    state: TypeState.Physical,
    stage: 4,
    base: "frogegg",
  },
  {
    name: "Frog",
    icon: "frog",
    id: 2067,
    state: TypeState.Bouncer,
    lands_on: [
      "musclecar",
      (type) =>
        ["seaweed", "canoe", "safaritruck"].includes(
          type.meta.evolution_base || ""
        ) && (type.meta.evolution_stage || 0) >= 3,
      "earthmystery",
      "watermystery",
      "trail",
      "munzee",
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
    ],
    stage: 5,
    base: "frogegg",
    hidden: [TypeHidden.Capture, TypeHidden.Deploy],
  },
  {
    name: "Tree Frog",
    icon: "treefrog",
    id: 2110,
    state: TypeState.Bouncer,
    lands_on: [
      "skyland",
      "musclecar",
      (type) =>
        ["seaweed", "canoe", "safaritruck"].includes(
          type.meta.evolution_base || ""
        ) && (type.meta.evolution_stage || 0) >= 3,
      "earthmystery",
      "watermystery",
      "trail",
      "munzee",
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
    ],
    stage: 5,
    base: "frogegg",
  },
  {
    name: "Poison Dart Frog",
    icon: "poisondartfrog",
    id: 2111,
    state: TypeState.Bouncer,
    lands_on: [
      "skyland",
      "musclecar",
      (type) =>
        ["seaweed", "canoe", "safaritruck"].includes(
          type.meta.evolution_base || ""
        ) && (type.meta.evolution_stage || 0) >= 3,
      "earthmystery",
      "watermystery",
      "trail",
      "munzee",
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
    ],
    stage: 5,
    base: "frogegg",
  },
  {
    name: "Tomato Frog",
    icon: "tomatofrog",
    id: 2112,
    state: TypeState.Bouncer,
    lands_on: [
      "skyland",
      "musclecar",
      (type) =>
        ["seaweed", "canoe", "safaritruck"].includes(
          type.meta.evolution_base || ""
        ) && (type.meta.evolution_stage || 0) >= 3,
      "earthmystery",
      "watermystery",
      "trail",
      "munzee",
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
    ],
    stage: 5,
    base: "frogegg",
  },

  // Jellyfish
  {
    name: "Planula Larva",
    icon: "planulalarva",
    id: 2461,
    state: TypeState.Virtual,
    stage: 1,
    base: "planulalarva",
    hidden: [],
  },
  {
    name: "Polyp",
    icon: "polyp",
    id: 2462,
    state: TypeState.Virtual,
    stage: 2,
    base: "planulalarva",
  },
  {
    name: "Polyp with Bulbs",
    icon: "polypwithbulbs",
    id: 2463,
    state: TypeState.Virtual,
    stage: 3,
    base: "planulalarva",
  },
  {
    name: "Ephyra Larva",
    icon: "ephyralarva",
    id: 2464,
    state: TypeState.Virtual,
    stage: 4,
    base: "planulalarva",
  },
  {
    name: "Jellyfish",
    icon: "jellyfish",
    id: "null_jellyfish",
    state: TypeState.Bouncer,
    lands_on: [
      "treehouse",
      "skyland",
      (type) =>
        ["seaweed", "canoe", "safaritruck"].includes(
          type.meta.evolution_base || ""
        ),
      "earthmystery",
      "watermystery",
      "munzee",
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
    ],
    stage: 5,
    base: "planulalarva",
    hidden: [TypeHidden.Capture, TypeHidden.Deploy],
  },
  {
    name: "Box Jellyfish",
    icon: "boxjellyfish",
    id: "null_boxjellyfish",
    state: TypeState.Bouncer,
    lands_on: [
      "treehouse",
      "skyland",
      (type) =>
        ["seaweed", "canoe", "safaritruck"].includes(
          type.meta.evolution_base || ""
        ),
      "earthmystery",
      "watermystery",
      "munzee",
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
    ],
    set: "nature",
    stage: 5,
    base: "planulalarva",
  },
  {
    name: "Golden Jellyfish",
    icon: "goldenjellyfish",
    id: "null_goldenjellyfish",
    state: TypeState.Bouncer,
    lands_on: [
      "treehouse",
      "skyland",
      (type) =>
        ["seaweed", "canoe", "safaritruck"].includes(
          type.meta.evolution_base || ""
        ),
      "earthmystery",
      "watermystery",
      "munzee",
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
    ],
    stage: 5,
    base: "planulalarva",
  },
  {
    name: "PB & Jellyfish",
    icon: "pb&jellyfish",
    id: "null_pb&jellyfish",
    state: TypeState.Bouncer,
    lands_on: [
      "treehouse",
      "skyland",
      (type) =>
        ["seaweed", "canoe", "safaritruck"].includes(
          type.meta.evolution_base || ""
        ),
      "earthmystery",
      "watermystery",
      "munzee",
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
    ],
    stage: 5,
    base: "planulalarva",
  },

  // Turtle
  {
    name: "Turtle Egg",
    icon: "turtleegg",
    id: 2452,
    state: TypeState.Physical,
    stage: 1,
    base: "turtleegg",
  },
  {
    name: "Turtle Hatchling",
    icon: "turtlehatchling",
    id: 2453,
    state: TypeState.Physical,
    stage: 2,
    base: "turtleegg",
  },
  {
    name: "Juvenile Turtle",
    icon: "juvenileturtle",
    id: 2454,
    state: TypeState.Physical,
    stage: 3,
    base: "turtleegg",
  },
  {
    name: "Adult Turtle",
    icon: "adultturtle",
    id: 2455,
    state: TypeState.Physical,
    stage: 4,
    base: "turtleegg",
  },
  {
    name: "Turtle",
    icon: "turtle",
    id: "null_turtle",
    state: TypeState.Bouncer,
    lands_on: [
      "treehouse",
      "skyland",
      (type) =>
        ["seaweed", "canoe", "safaritruck"].includes(
          type.meta.evolution_base || ""
        ),
      "earthmystery",
      "watermystery",
      "munzee",
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
    ],
    stage: 5,
    base: "turtleegg",
    hidden: [TypeHidden.Capture, TypeHidden.Deploy],
  },
  {
    name: "Sea Turtle",
    icon: "seaturtle",
    id: "null_seaturtle",
    state: TypeState.Bouncer,
    lands_on: [
      "treehouse",
      "skyland",
      (type) =>
        ["seaweed", "canoe", "safaritruck"].includes(
          type.meta.evolution_base || ""
        ),
      "earthmystery",
      "watermystery",
      "munzee",
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
    ],
    stage: 5,
    base: "turtleegg",
  },
  {
    name: "Snapping Turtle",
    icon: "snappingturtle",
    id: "null_snappingturtle",
    state: TypeState.Bouncer,
    lands_on: [
      "treehouse",
      "skyland",
      (type) =>
        ["seaweed", "canoe", "safaritruck"].includes(
          type.meta.evolution_base || ""
        ),
      "earthmystery",
      "watermystery",
      "munzee",
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
    ],
    stage: 5,
    base: "turtleegg",
  },
  {
    name: "Taekwondo Tortoise",
    icon: "taekwondotortoise",
    id: "null_taekwondotortoise",
    state: TypeState.Bouncer,
    lands_on: [
      "treehouse",
      "skyland",
      (type) =>
        ["seaweed", "canoe", "safaritruck"].includes(
          type.meta.evolution_base || ""
        ),
      "earthmystery",
      "watermystery",
      "munzee",
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
    ],
    stage: 5,
    base: "turtleegg",
  },
] as {
  name: string;
  icon: string;
  id: TypeID;
  state: TypeState;
  stage?: number;
  base?: string;
  lands_on?: TypeID[];
  duration?: number;

  meta?: TypeMeta;
  alt_icons?: string[];
  points?: PointsInterface;
  tags?: TypeTags[];
  hidden?: TypeHidden[];
}[];
