import { TypeID, TypeState } from "../../munzee";

const zodiacs: {
  name: string;
  icon: string;
  id: TypeID;
  state: TypeState;
  zodiac: "western" | "chinese" | "egyptian";
}[] = [
  {
    name: "Scorpio",
    icon: "scorpio",
    id: 308,
    state: TypeState.Physical,
    zodiac: "western",
  },
  {
    name: "Sagittarius",
    icon: "sagittarius",
    id: 312,
    state: TypeState.Physical,
    zodiac: "western",
  },
  {
    name: "Capricorn",
    icon: "capricorn",
    id: 313,
    state: TypeState.Physical,
    zodiac: "western",
  },
  {
    name: "Aquarius",
    icon: "aquarius",
    id: 314,
    state: TypeState.Physical,
    zodiac: "western",
  },
  {
    name: "Pisces",
    icon: "pisces",
    id: 315,
    state: TypeState.Physical,
    zodiac: "western",
  },
  {
    name: "Aries",
    icon: "aries",
    id: 316,
    state: TypeState.Physical,
    zodiac: "western",
  },
  {
    name: "Taurus",
    icon: "taurus",
    id: 317,
    state: TypeState.Physical,
    zodiac: "western",
  },
  {
    name: "Gemini",
    icon: "gemini",
    id: 318,
    state: TypeState.Physical,
    zodiac: "western",
  },
  {
    name: "Cancer",
    icon: "cancer",
    id: 319,
    state: TypeState.Physical,
    zodiac: "western",
  },
  {
    name: "Leo",
    icon: "leo",
    id: 320,
    state: TypeState.Physical,
    zodiac: "western",
  },
  {
    name: "Virgo",
    icon: "virgo",
    id: 321,
    state: TypeState.Physical,
    zodiac: "western",
  },
  {
    name: "Libra",
    icon: "libra",
    id: 322,
    state: TypeState.Physical,
    zodiac: "western",
  },
  {
    name: "Dog Chinese Zodiac",
    icon: "dogchinesezodiac",
    id: 1271,
    state: TypeState.Physical,
    zodiac: "chinese",
  },
  {
    name: "Pig Chinese Zodiac",
    icon: "pigchinesezodiac",
    id: 1272,
    state: TypeState.Physical,
    zodiac: "chinese",
  },
  {
    name: "Rat Chinese Zodiac",
    icon: "ratchinesezodiac",
    id: 1273,
    state: TypeState.Physical,
    zodiac: "chinese",
  },
  {
    name: "Ox Chinese Zodiac",
    icon: "oxchinesezodiac",
    id: 1274,
    state: TypeState.Physical,
    zodiac: "chinese",
  },
  {
    name: "Tiger Chinese Zodiac",
    icon: "tigerchinesezodiac",
    id: 1275,
    state: TypeState.Physical,
    zodiac: "chinese",
  },
  {
    name: "Rabbit Chinese Zodiac",
    icon: "rabbitchinesezodiac",
    id: 1276,
    state: TypeState.Physical,
    zodiac: "chinese",
  },
  {
    name: "Dragon Chinese Zodiac",
    icon: "dragonchinesezodiac",
    id: 1277,
    state: TypeState.Physical,
    zodiac: "chinese",
  },
  {
    name: "Snake Chinese Zodiac",
    icon: "snakechinesezodiac",
    id: 1278,
    state: TypeState.Physical,
    zodiac: "chinese",
  },
  {
    name: "Horse Chinese Zodiac",
    icon: "horsechinesezodiac",
    id: 1279,
    state: TypeState.Physical,
    zodiac: "chinese",
  },
  {
    name: "Goat Chinese Zodiac",
    icon: "goatchinesezodiac",
    id: 1280,
    state: TypeState.Physical,
    zodiac: "chinese",
  },
  {
    name: "Monkey Chinese Zodiac",
    icon: "monkeychinesezodiac",
    id: 1281,
    state: TypeState.Physical,
    zodiac: "chinese",
  },
  {
    name: "Rooster Chinese Zodiac",
    icon: "roosterchinesezodiac",
    id: 1282,
    state: TypeState.Physical,
    zodiac: "chinese",
  },
  {
    name: "The Nile",
    icon: "nile",
    id: "null_nile",
    state: TypeState.Virtual,
    zodiac: "egyptian",
  },
];

export default zodiacs;