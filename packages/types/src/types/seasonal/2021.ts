import { SeasonalCategory } from ".";
import { TypeHidden, TypeState, TypeTags } from "../../munzee";

const s2021: SeasonalCategory[] = [
  {
    name: "Women's History Month",
    id: "womenshistory2020",
    starts: "2021-02-25T12:00:00-05:00",
    ends: "2021-03-14T23:59:00-05:00",
    specials: [
      {
        name: "Amelia Earhart",
        icon: "ameliaearhart",
        id: "null_ameliaearhart",
        lands_on: ["munzee", "mystery"],
      },
      {
        name: "Frida Kahlo",
        icon: "fridakahlo",
        id: "null_fridakahlo",
        lands_on: [
          "munzee",
          type =>
            type.has_tag(TypeTags.EvolutionNature) &&
            ["roseseed", "tulipseed", "lilyseed"].includes(type.meta.evolution_base || ""),
        ],
      },
      {
        name: "Hedy Lamarr",
        icon: "hedylamarr",
        id: "null_hedylamarr",
        lands_on: [
          "munzee",
          type => type.has_tag(TypeTags.TypeJewel) && type.state === TypeState.Physical,
        ],
      },
      {
        name: "Maya Angelou",
        icon: "mayaangelou",
        id: "null_mayaangelou",
        lands_on: [type => type.has_tag(TypeTags.TypeVirtual), "poilibrary", "surprise"],
      },
      {
        name: "Jane Goodall",
        icon: "janegoodall",
        id: "null_janegoodall",
        lands_on: [
          type => type.has_tag(TypeTags.TypeVirtual),
          "poiwildlife",
          type => type.meta.evolution_base === "safaritruck",
        ],
      },
      {
        name: "Margaret Hamilton",
        icon: "margarethamilton",
        id: "null_margarethamilton",
        lands_on: [
          type => type.has_tag(TypeTags.TypeVirtual),
          "poiuniqueattraction",
          "joystickvirtual",
        ],
      },
    ],
    types: [
      {
        name: "Flight Pin",
        icon: "flightpin",
        id: "null_flightpin",
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Palette",
        icon: "palette",
        id: "null_palette",
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Film Reel",
        icon: "filmreel",
        id: "null_filmreel",
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Poem",
        icon: "poem",
        id: "null_poem",
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Chimpanzee",
        icon: "chimpanzee",
        id: "null_chimpanzee",
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Rocket",
        icon: "rocket",
        id: "null_rocket",
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
    ],
  },
  {
    name: "Courier Critters",
    id: "couriercritters2020",
    starts: "2021-02-01T00:00:00-05:00",
    ends: "2021-04-31T23:59:00-05:00",
    pobs: [
      {
        name: "Courier Stork",
        icon: "courierstork",
        id: 2853,
        lands_on: [],
      },
      {
        name: "Courier Owl",
        icon: "courierowl",
        id: 2854,
        lands_on: [],
      },
      {
        name: "Courier Pigeon",
        icon: "courierpigeon",
        id: 2855,
        lands_on: [],
      },
    ],
  },
  {
    name: "Special Delivery Cupid",
    id: "specialdeliverycupid2021",
    starts: "2021-02-01T00:00:00-06:00",
    ends: "2021-02-28T23:59:00-06:00",
    pobs: [
      {
        name: "Special Delivery Cupid",
        icon: "specialdeliverycupid",
        id: 2851,
        duration: 5,
        lands_on: [
          "treehouse",
          "skyland",
          "munzee",
          "firemystery",
          "airmystery",
          "poipostoffice",
          type => type.has_tag(TypeTags.TypeVirtual),
          type => type.has_tag(TypeTags.TypeReseller),
          type => type.has_tag(TypeTags.TypeSeasonal),
        ],
      },
    ],
    types: [
      {
        name: "Heart Arrow",
        icon: "heartarrow",
        id: 2852,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
    ],
  },
  {
    name: "Buzzle Box",
    id: "buzzlebox2021",
    starts: "2021-01-29T00:00:00-06:00",
    ends: "2021-02-21T23:59:00-06:00",
    specials: [
      {
        name: "Buzzle Box",
        icon: "buzzlebox",
        id: 2856,
        duration: 6,
        lands_on: [
          "munzee",
          "joystick",
          type => type.has_tag(TypeTags.TypeMystery) && type.state === TypeState.Physical,
        ],
      },
    ],
    types: [
      {
        name: "Red Buzzle Piece 1",
        icon: "redbuzzlepiece1",
        id: 2857,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Red Buzzle Piece 2",
        icon: "redbuzzlepiece2",
        id: 2858,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Red Buzzle Piece 3",
        icon: "redbuzzlepiece3",
        id: 2859,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Red Buzzle Piece 4",
        icon: "redbuzzlepiece4",
        id: 2860,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Green Buzzle Piece 1",
        icon: "greenbuzzlepiece1",
        id: 2861,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Green Buzzle Piece 2",
        icon: "greenbuzzlepiece2",
        id: 2862,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Green Buzzle Piece 3",
        icon: "greenbuzzlepiece3",
        id: 2863,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Green Buzzle Piece 4",
        icon: "greenbuzzlepiece4",
        id: 2864,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Yellow Buzzle Piece 1",
        icon: "yellowbuzzlepiece1",
        id: 2865,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Yellow Buzzle Piece 2",
        icon: "yellowbuzzlepiece2",
        id: 2866,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Yellow Buzzle Piece 3",
        icon: "yellowbuzzlepiece3",
        id: 2867,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Yellow Buzzle Piece 4",
        icon: "yellowbuzzlepiece4",
        id: 2868,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
    ],
  },
  {
    name: "Hamilton Hamzee",
    id: "hamiltonhamzee2021",
    starts: "2021-01-21T00:00:00-06:00",
    ends: "2021-03-15T23:59:00-06:00",
    pobs: [
      {
        name: "Hamilton Hamzee",
        icon: "hamiltonhamzee",
        id: 2850,
        duration: 6,
        lands_on: [
          "treehouse",
          "munzee",
          "earthmystery",
          "icemystery",
          type => type.has_tag(TypeTags.TypeSeasonal),
        ],
      },
    ],
  },
  {
    name: "Garden Gnomes",
    id: "gnomes2021",
    starts: "2021-01-01T00:00:00-06:00",
    ends: "2021-12-31T23:59:00-06:00",
    pobs: [
      {
        name: "Garden Gnome",
        icon: "gardengnome",
        id: 2775,
        duration: 6,
        lands_on: [type => type.has_tag(TypeTags.TypeVirtual), "munzee"],
      },
      {
        name: "Ice Hockey Garden Gnome",
        icon: "icehockeygardengnome",
        id: 2776,
        duration: 6,
        lands_on: [
          type => type.has_tag(TypeTags.TypeVirtual),
          "munzee",
          "icemystery",
          "treehouse",
          "skyland",
        ],
      },
      {
        name: "Archery Garden Gnome",
        icon: "archerygardengnome",
        id: 2777,
        duration: 6,
        lands_on: [
          type => type.has_tag(TypeTags.TypeVirtual),
          "munzee",
          "crossbow",
          "treehouse",
          "skyland",
        ],
      },
      {
        name: "Basketball Garden Gnome",
        icon: "basketballgardengnome",
        id: 2778,
        duration: 6,
        lands_on: [
          type => type.has_tag(TypeTags.TypeVirtual),
          "munzee",
          "airmystery",
          "treehouse",
          "skyland",
        ],
      },
    ],
    types: [
      {
        name: "Gnome Hockey Helmet",
        icon: "gnomehockeyhelmet",
        id: 2802,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Gnome Archery Hood",
        icon: "gnomearcheryhood",
        id: 2803,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
      {
        name: "Gnome Noggin Net",
        icon: "gnomenogginnet",
        id: 2804,
        state: TypeState.Virtual,
        tags: [TypeTags.ScatterStandalone, TypeTags.Scatter],
        hidden: [TypeHidden.Inventory],
        meta: {
          scatter_duration: 2,
        },
      },
    ],
  },
];

export default s2021;
