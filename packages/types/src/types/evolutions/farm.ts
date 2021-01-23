import { PointsInterface, TypeHidden, TypeID, TypeMeta, TypeState, TypeTags } from "../../munzee";

const farm: {
  name: string;
  icon: string;
  id: TypeID;
  state: TypeState;
  stage?: number;
  base?: string;

  meta?: TypeMeta;
  alt_icons?: string[];
  points?: PointsInterface;
  tags?: TypeTags[];
  hidden?: TypeHidden[];
}[] = [
  {
    name: "Tomato",
    icon: "tomato",
    id: 658,
    state: TypeState.Physical,
    stage: 3,
    base: "tomatoseed",
    hidden: [],
  },
  {
    name: "Ear of Corn",
    icon: "earofcorn",
    id: 659,
    state: TypeState.Physical,
    stage: 3,
    base: "cornseed",
    hidden: [],
  },
  {
    name: "Carrot",
    icon: "carrot",
    id: 660,
    state: TypeState.Virtual,
    stage: 3,
    base: "carrotseed",
  },
  {
    name: "Peas",
    icon: "peas",
    id: 661,
    state: TypeState.Virtual,
    stage: 3,
    base: "peasseed",
  },
  {
    name: "Tomato Seed",
    icon: "tomatoseed",
    id: 662,
    state: TypeState.Physical,
    stage: 1,
    base: "tomatoseed",
  },
  {
    name: "Corn Seed",
    icon: "cornseed",
    id: 663,
    state: TypeState.Physical,
    stage: 1,
    base: "cornseed",
  },
  {
    name: "Carrot Seed",
    icon: "carrotseed",
    id: 664,
    state: TypeState.Virtual,
    stage: 1,
    base: "carrotseed",
    hidden: [],
  },
  {
    name: "Peas Seed",
    icon: "peasseed",
    id: 665,
    state: TypeState.Virtual,
    stage: 1,
    base: "peasseed",
    hidden: [],
  },
  {
    name: "Tomato Plant",
    icon: "tomatoplant",
    id: 666,
    state: TypeState.Physical,
    stage: 2,
    base: "tomatoseed",
  },
  {
    name: "Corn Stalk",
    icon: "cornstalk",
    id: 667,
    state: TypeState.Physical,
    stage: 2,
    base: "cornseed",
  },
  {
    name: "Carrot Plant",
    icon: "carrotplant",
    id: 668,
    state: TypeState.Virtual,
    stage: 2,
    base: "carrotseed",
  },
  {
    name: "Peas Plant",
    icon: "peasplant",
    id: 669,
    state: TypeState.Virtual,
    stage: 2,
    base: "peasseed",
  },
  {
    name: "Golden Carrot",
    icon: "goldencarrot",
    id: 678,
    state: TypeState.Physical,
    stage: 3,
    base: "goldencarrotseed",
    hidden: [],
  },
  {
    name: "Golden Carrot Seed",
    icon: "goldencarrotseed",
    id: 679,
    state: TypeState.Physical,
    stage: 1,
    base: "goldencarrotseed",
  },
  {
    name: "Golden Carrot Plant",
    icon: "goldencarrotplant",
    id: 680,
    state: TypeState.Physical,
    stage: 2,
    base: "goldencarrotplant",
  },
  {
    name: "Milk",
    icon: "milk",
    id: 684,
    state: TypeState.Physical,
    stage: 3,
    base: "calf",
    hidden: [],
  },
  {
    name: "Bacon",
    icon: "bacon",
    id: 685,
    state: TypeState.Physical,
    stage: 3,
    base: "piglet",
    hidden: [],
  },
  {
    name: "Calf",
    icon: "calf",
    id: 698,
    state: TypeState.Physical,
    stage: 1,
    base: "calf",
  },
  {
    name: "Piglet",
    icon: "piglet",
    id: 699,
    state: TypeState.Physical,
    stage: 1,
    base: "piglet",
  },
  {
    name: "Cow",
    icon: "cow",
    id: 700,
    state: TypeState.Physical,
    stage: 2,
    base: "calf",
  },
  {
    name: "Pig",
    icon: "pig",
    id: 701,
    state: TypeState.Physical,
    stage: 2,
    base: "piglet",
  },
  {
    name: "Championship Horse",
    icon: "championshiphorse",
    id: 702,
    state: TypeState.Virtual,
    stage: 3,
    base: "colt",
    alt_icons: ["horse"],
  },
  {
    name: "Eggs",
    icon: "eggs",
    id: 703,
    state: TypeState.Virtual,
    stage: 3,
    base: "chick",
  },
  {
    name: "Colt",
    icon: "colt",
    id: 704,
    state: TypeState.Virtual,
    stage: 1,
    base: "colt",
    hidden: [],
  },
  {
    name: "Chick",
    icon: "chick",
    id: 705,
    state: TypeState.Virtual,
    stage: 1,
    base: "chick",
    hidden: [],
  },
  {
    name: "Racehorse",
    icon: "racehorse",
    id: 706,
    state: TypeState.Virtual,
    stage: 2,
    base: "colt",
  },
  {
    name: "Chicken",
    icon: "chicken",
    id: 707,
    state: TypeState.Virtual,
    stage: 2,
    base: "chick",
  },
  {
    name: "Barn",
    icon: "barn",
    id: 708,
    state: TypeState.Physical,
    stage: 3,
    base: "lean-toshed",
    hidden: [],
  },
  {
    name: "Tractor",
    icon: "tractor",
    id: 709,
    state: TypeState.Physical,
    stage: 3,
    base: "hoe",
    hidden: [],
  },
  {
    name: "Lean-To Shed",
    icon: "lean-toshed",
    id: 729,
    state: TypeState.Physical,
    stage: 1,
    base: "lean-toshed",
  },
  {
    name: "Garden Shed",
    icon: "gardenshed",
    id: 730,
    state: TypeState.Physical,
    stage: 2,
    base: "lean-toshed",
  },
  {
    name: "Hoe",
    icon: "hoe",
    id: 731,
    state: TypeState.Physical,
    stage: 1,
    base: "hoe",
  },
  {
    name: "Plow",
    icon: "plow",
    id: 732,
    state: TypeState.Physical,
    stage: 2,
    base: "plow",
  },
  {
    name: "Family",
    icon: "family",
    id: 735,
    state: TypeState.Virtual,
    stage: 3,
    base: "farmer",
  },
  {
    name: "Field",
    icon: "field",
    id: 736,
    state: TypeState.Virtual,
    stage: 3,
    base: "pottedplant",
  },
  {
    name: "Farmer",
    icon: "farmer",
    id: 737,
    state: TypeState.Virtual,
    stage: 1,
    base: "farmer",
    hidden: [],
  },
  {
    name: "Farmer and Wife",
    icon: "farmerandwife",
    id: 738,
    state: TypeState.Virtual,
    stage: 2,
    base: "farmer",
  },
  {
    name: "Potted Plant",
    icon: "pottedplant",
    id: 739,
    state: TypeState.Virtual,
    stage: 1,
    base: "pottedplant",
    hidden: [],
  },
  {
    name: "Garden",
    icon: "garden",
    id: 740,
    state: TypeState.Virtual,
    stage: 2,
    base: "pottedplant",
  },
];

export default farm;
