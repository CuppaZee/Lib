import {
  PointsInterface,
  TypeHidden,
  TypeID,
  TypeMeta,
  TypeState,
  TypeTags,
} from "../../munzee";

const copen: {
  name: string;
  icon: string;
  id: TypeID;
  duration?: number;
  lands_on?: TypeID[];
  meta?: TypeMeta;
  state?: TypeState;
  alt_icons?: string[];
  points?: PointsInterface;
  tags?: TypeTags[];
  hidden?: TypeHidden[];
}[] = [
  {
    name: "Get Well Card",
    icon: "getwellcard",
    id: 2421,
  },
  {
    name: "Birthday Card",
    icon: "birthdaycard",
    id: 2420,
  },
  {
    name: "Thank You Card",
    icon: "thankyoucard",
    id: 2432,
  },
  {
    name: "Howdy Card",
    icon: "howdycard",
    id: 2450,
  },
  {
    name: "Congrats Card",
    icon: "congratscard",
    id: 2495,
  },
  {
    name: "Sorry Card",
    icon: "sorrycard",
    id: 2496,
  },
  {
    name: "Sorry Card 1",
    icon: "sorrycard1",
    id: 2497,
  },
  {
    name: "Sorry Card 2",
    icon: "sorrycard2",
    id: 2498,
  },
  {
    name: "Sorry Card 3",
    icon: "sorrycard3",
    id: 2499,
  },
  {
    name: "Summer Card",
    icon: "summer_card",
    id: "null_summercard",
  },
  {
    name: "Winter Card",
    icon: "winter_card",
    id: "null_wintercard",
  },
  {
    name: "Event Card",
    icon: "eventcard",
    id: "null_eventcard",
  },
  {
    name: "Fall Card",
    icon: "fall_card",
    id: "null_fallcard",
  },
  {
    name: "Spring Card",
    icon: "spring_card",
    id: "null_springcard",
  },
  {
    name: "Tech Issues Card",
    icon: "techissuescard",
    id: "null_techissuescard",
  },
];

export default copen;