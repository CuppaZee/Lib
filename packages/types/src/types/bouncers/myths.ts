import { TypeID, TypeMeta, TypeState, TypeTags } from "../../munzee";

export default [
  {
    name: "The Unicorn",
    icon: "theunicorn",
    id: 505,
    state: "bouncer",
    type: "original",
    lands_on: ["treehouse", "munzee", "shamrock"],
  },
  {
    name: "Leprechaun",
    icon: "leprechaun",
    id: 508,
    state: "bouncer",
    type: "original",
    lands_on: ["treehouse", "munzee", "shamrock"],
  },
  {
    name: "Dragon",
    icon: "dragon",
    id: 573,
    state: "bouncer",
    type: "original",
    lands_on: ["treehouse", "munzee", "firemystery"],
  },
  {
    name: "Yeti",
    icon: "yeti",
    id: 725,
    state: "bouncer",
    type: "original",
    lands_on: ["treehouse", "munzee", "icemystery"],
  },
  {
    name: "Faun",
    icon: "faun",
    id: 853,
    state: "bouncer",
    type: "classical",
    lands_on: ["treehouse", "munzee", "earthmystery"],
  },
  {
    name: "Hydra",
    icon: "hydra",
    id: 953,
    state: "bouncer",
    type: "classical",
    lands_on: ["treehouse", "munzee", "watermystery"],
  },
  {
    name: "Pegasus",
    icon: "pegasus",
    id: 1100,
    state: "bouncer",
    type: "classical",
    lands_on: [
      "skyland",
      (type) => type.has_tag(TypeTags.TypeVirtual),
      "airmystery",
      "electricmystery",
    ],
  },
  {
    name: "Cyclops",
    icon: "cyclops",
    id: 1168,
    state: "bouncer",
    type: "classical",
    lands_on: [
      "skyland",
      "treehouse",
      (type) => type.has_tag(TypeTags.TypeJewel) && type.id !== 148,
    ],
  },
  {
    name: "Mermaid",
    icon: "mermaid",
    id: 1378,
    state: "bouncer",
    type: "mirror",
    lands_on: [
      "treehouse",
      "munzee",
      "watermystery",
      (type) =>
        type.has_tag(TypeTags.TypeJewel) && type.state === TypeState.Physical,
    ],
  },
  {
    name: "Fairy",
    icon: "fairy",
    id: 1544,
    state: "bouncer",
    type: "mirror",
    lands_on: ["skyland", "treehouse", "munzee", "airmystery", "mystery"],
  },
  {
    name: "Dryad Fairy",
    icon: "dryadfairy",
    id: 1602,
    state: "bouncer",
    type: "mirror",
    lands_on: ["skyland", "treehouse", "munzee", "airmystery", "earthmystery"],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Wildfire Fairy",
    icon: "wildfirefairy",
    id: 1603,
    state: "bouncer",
    type: "mirror",
    lands_on: ["skyland", "treehouse", "munzee", "airmystery", "firemystery"],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Battle Unicorn",
    icon: "battleunicorn",
    id: 1604,
    state: "bouncer",
    type: "original",
    lands_on: [
      "treehouse",
      "munzee",
      "mace",
      "longsword",
      "battleaxe",
      "thehammer",
    ],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Hippocamp Unicorn",
    icon: "hippocampunicorn",
    id: 1605,
    state: "bouncer",
    type: "original",
    lands_on: ["treehouse", "munzee", "watermystery", "icemystery"],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Dwarf Leprechaun",
    icon: "dwarfleprechaun",
    id: 1646,
    state: "bouncer",
    type: "original",
    lands_on: [
      "skyland",
      "treehouse",
      "munzee",
      (type) => type.has_tag(TypeTags.TypeWeaponClan),
    ],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Goblin Leprechaun",
    icon: "goblinleprechaun",
    id: 1647,
    state: "bouncer",
    type: "original",
    lands_on: [
      "skyland",
      "treehouse",
      "munzee",
      (type) => type.has_tag(TypeTags.TypeJewel) && type.id !== 148,
    ],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Hot Spring Mermaid",
    icon: "hotspringmermaid",
    id: 1648,
    state: "bouncer",
    type: "mirror",
    lands_on: ["treehouse", "munzee", "watermystery", "firemystery"],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Melusine Mermaid",
    icon: "melusinemermaid",
    id: 1649,
    state: "bouncer",
    type: "mirror",
    lands_on: ["skyland", "treehouse", "munzee", "watermystery", "airmystery"],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Banshee",
    icon: "banshee",
    id: 1827,
    state: "bouncer",
    type: "mirror",
    lands_on: [
      "skyland",
      "treehouse",
      "munzee",
      "shamrock",
      "airmystery",
      (type) => type.has_tag(TypeTags.VirtualColourBlack),
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
    ],
  },
  {
    name: "Chinese Dragon",
    icon: "chinesedragon",
    id: 1874,
    state: "bouncer",
    type: "original",
    lands_on: [
      "skyland",
      "treehouse",
      "munzee",
      "firemystery",
      "airmystery",
      (type) => type.has_tag(TypeTags.TypeZodiacChinese),
    ],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Wyvern Dragon",
    icon: "wyverndragon",
    id: 1875,
    state: "bouncer",
    type: "original",
    lands_on: [
      "skyland",
      "treehouse",
      "munzee",
      "airmystery",
      "virtual_amethyst",
      (type) => type.meta.evolution_base === "coin",
    ],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Lycanthrope Yeti",
    icon: "lycanthropeyeti",
    id: 1876,
    state: "bouncer",
    type: "original",
    lands_on: [
      "treehouse",
      "munzee",
      "earthmystery",
      "firemystery",
      (type) => type.has_tag(TypeTags.TypeZodiacWestern),
    ],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Reptoid Yeti",
    icon: "reptoidyeti",
    id: 1877,
    state: "bouncer",
    type: "original",
    lands_on: ["treehouse", "munzee", "earthmystery", "watermystery"],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Griffin Pegasus",
    icon: "griffinpegasus",
    id: 1995,
    state: "bouncer",
    type: "classical",
    lands_on: [
      "skyland",
      "treehouse",
      "munzee",
      (type) => type.has_tag(TypeTags.TypeJewel),
      "airmystery",
      (type) => type.meta.evolution_base == "lioncub",
    ],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Alicorn Pegasus",
    icon: "alicornpegasus",
    id: 1996,
    state: "bouncer",
    type: "classical",
    lands_on: [
      "skyland",
      "treehouse",
      (type) => type.has_tag(TypeTags.TypeVirtual),
      "airmystery",
      "shamrock",
    ],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Centaur Faun",
    icon: "centaurfaun",
    id: 1997,
    state: "bouncer",
    type: "classical",
    lands_on: [
      "skyland",
      "treehouse",
      "munzee",
      "earthmystery",
      (type) => type.has_tag(TypeTags.TypeWeaponClan),
    ],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Krampus Faun",
    icon: "krampusfaun",
    id: 1998,
    state: "bouncer",
    type: "classical",
    lands_on: [
      "skyland",
      "treehouse",
      "munzee",
      "earthmystery",
      "icemystery",
      (type) => type.meta.evolution_base === "farmer",
    ],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Nymph",
    icon: "nymph",
    id: 2118,
    state: "bouncer",
    type: "mirror",
    lands_on: [
      "skyland",
      "treehouse",
      "munzee",
      "earthmystery",
      (type) => type.has_tag(TypeTags.VirtualColourBrown),
      (type) => type.has_tag(TypeTags.VirtualColourBlack),
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
    ],
  },
  {
    name: "Cerberus Hydra",
    icon: "cerberushydra",
    id: 2252,
    state: "bouncer",
    type: "classical",
    lands_on: ["treehouse", "munzee", "watermystery", "firemystery"],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Cthulhu Hydra",
    icon: "cthulhuhydra",
    id: 2253,
    state: "bouncer",
    type: "classical",
    lands_on: ["skyland", "treehouse", "munzee", "watermystery", "airmystery"],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Harpy Banshee",
    icon: "harpybanshee",
    id: 2254,
    state: "bouncer",
    type: "mirror",
    lands_on: [
      "skyland",
      "treehouse",
      "munzee",
      "shamrock",
      "airmystery",
      (type) => type.has_tag(TypeTags.TypeJewel),
    ],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Witch Banshee",
    icon: "witchbanshee",
    id: 2255,
    state: "bouncer",
    type: "mirror",
    lands_on: [
      "skyland",
      "treehouse",
      "munzee",
      "airmystery",
      "firemystery",
      (type) =>
        [
          "tomatoseed",
          "cornseed",
          "goldencarrotseed",
          "carrotseed",
          "peasseed",
          "farmer",
          "tulipseed",
          "roseseed",
          "lilyseed",
          "carnationseed",
        ].includes(type.meta.evolution_base || ""),
    ],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Minotaur Cyclops",
    icon: "minotaurcyclops",
    id: 2477,
    state: "bouncer",
    type: "classical",
    lands_on: [
      "treehouse",
      "munzee",
      (type) => type.has_tag(TypeTags.TypeJewel),
      (type) => type.has_tag(TypeTags.TypeWeaponClan),
      "rockpaperscissors",
    ],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Balor Cyclops",
    icon: "balorcyclops",
    id: 2478,
    state: "bouncer",
    type: "classical",
    lands_on: ["treehouse", "munzee", "shamrock", "electricmystery"],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Vampire Nymph",
    icon: "vampirenymph",
    id: 2479,
    state: "bouncer",
    type: "mirror",
    lands_on: [
      "treehouse",
      "skyland",
      "munzee",
      "earthmystery",
      (type) => type.has_tag(TypeTags.VirtualColourRed),
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
      "tomato",
      (type) => type.meta.evolution_base === "farmer",
    ],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Elf Nymph",
    icon: "elfnymph",
    id: 2480,
    state: "bouncer",
    type: "mirror",
    lands_on: [
      "treehouse",
      "munzee",
      "earthmystery",
      (type) => type.has_tag(TypeTags.TypeWeaponClan),
      (type) => type.has_tag(TypeTags.VirtualColourGreen),
      "virtual",
    ],
    tags: [TypeTags.BouncerMythVariant],
  },
  {
    name: "Poseidon",
    icon: "poseidon",
    id: 2524,
    state: "bouncer",
    type: "modern",
    lands_on: [
      "skyland",
      "treehouse",
      "munzee",
      "watermystery",
      (type) => type.has_tag(TypeTags.VirtualColourBlue),
      "aquamarine",
    ],
    meta: {
      scatters: {
        radius: 1000,
        types: [2527, 2528],
        min: 3,
        max: 3,
      },
    },
  },
  {
    name: "Aphrodite",
    icon: "aphrodite",
    id: "null_aphrodite",
    type: "modern",
    lands_on: [
      "skyland",
      "treehouse",
      "munzee",
      "airmystery",
      (type) => type.has_tag(TypeTags.VirtualColourPink),
      "pinkdiamond",
    ],
    meta: {
      scatterer_radius: 1000,
      scatterer_types: ["null_glasses", "null_shell-phone"],
      scatterer_min: 3,
      scatterer_max: 3,
    },
  },
] as {
  name: string;
  icon: string;
  id: TypeID;
  type: "original" | "classical" | "mirror" | "modern";
  tags?: TypeTags[];
  lands_on: TypeID[];
  meta?: TypeMeta;
}[];
