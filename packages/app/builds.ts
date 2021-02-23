import { Type } from "@cuppazee/types";

export interface Types {
  title?: string;
  description?: string;
  categories?: string[];
  types?: string[];
  function?: () => Type[];
}

export interface Feature {
  title: string;
  description: string;
  image?: string;
  thanks?: string;
}

export interface Improvement {
  description: string;
  thanks?: string;
}

export interface BugFix {
  description: string;
  thanks?: string;
}

export interface Build {
  build: number;
  date: string;
  description?: string;
  types?: Types[];
  fixes?: BugFix[];
  improvements?: Improvement[];
  features?: Feature[];
}

const builds: Build[] = [
  {
    build: 1,
    date: "2021-02-18",
    features: [
      {
        title: "Changes Card",
        description: "Added a new Changes Card to the Dashboard",
      },
    ],
    improvements: [
      {
        description: "Improved the reliability of the Dashboard on Web and Android",
        thanks: "PelicanRouge",
      },
      {
        description:
          "Reworked CuppaZee's Icon server, allowing more icons to show on the Inventory page to reduce data usage",
      },
    ],
    fixes: [
      {
        description: "Fixed Scrolling on User Activity Filters Popup",
        thanks: "Citygalbex, HiTechMD and mandello",
      },
      {
        description: "Fixed Icon for Greenie (and a few other types)",
        thanks: "c-bn",
      },
    ],
  },
  {
    build: 2,
    date: "2021-02-19",
    features: [
      {
        title: "User Challenges",
        description:
          "CuppaZee's Challenges section has been brought to CuppaZee V2, with a new design and more challenges!",
        thanks: "LympstoneBigtrotters, c-bn, IanZ, MamaDuck71 and CzPeet",
      },
    ],
    improvements: [
      {
        description:
          "Redesigned the Nearby Specials Page in order to provide more detail in a more compact view",
        thanks: "EmileP68 and sverlaan",
      },
    ],
  },
  {
    build: 3,
    date: "2021-02-19",
    features: [
      {
        title: "User Clan Progress",
        description:
          "The Clan Progress page is now available in CuppaZee V2, allowing people who haven't signed up to a clan to view their progress towards Clan Requirements!",
      },
    ],
    improvements: [
      {
        description:
          "Redesigned the ZeeOps Overview to fix the Reward Counter and make it clearer when you've collected your rewards.",
        thanks: "PelicanRouge",
      },
    ],
  },
  {
    build: 4,
    date: "2021-02-19",
    features: [
      {
        title: "Universal Capper",
        description:
          "The Universal Capper is now available in CuppaZee V2, allowing you to quickly and easily capture Universal and Social Munzees, and share your own with the world!",
      },
    ],
    improvements: [
      {
        description: "Added User Challenges to the Sidebar",
      },
    ],
  },
  {
    build: 5,
    date: "2021-02-19",
    features: [
      {
        title: "Blast Checker",
        description:
          "The Blast Checker has now been brought to CuppaZee V2, bringing the ability to check what you'd get (approximately) if you did a Mini, Normal or MEGA blast in a specific location!",
      },
    ],
    fixes: [
      {
        description: "Fixed the Universal Capper when all Universals have already been captured",
        thanks: "Obi-Cal",
      },
    ],
  },
  {
    build: 6,
    date: "2021-02-19",
    features: [
      {
        title: "QRew Checker",
        description:
          "The QRew Checker has returned, with an improved design, better accuracy, lower error rates and faster loading times!",
      },
      {
        title: "Donate Page",
        description: "A page with information on donating has been added to the app.",
      },
    ],
  },
  {
    build: 7,
    date: "2021-02-20",
    fixes: [
      {
        description:
          "Fixed the MHQ time parsing function, correcting the times displayed in the Inventory",
        thanks: "HiTechMD and Noisette",
      },
      {
        description: "Fixed display overflowing on User Activity Filters popup",
        thanks: "mandello",
      },
    ],
  },
  {
    build: 8,
    date: "2021-02-20",
    features: [
      {
        title: "User Profile",
        description:
          "Added the User Profile page, allowing you to now search for users to access their activity, stats, etc, as well as tap on users on Clan Stats.",
      },
    ],
    improvements: [
      {
        description: "Moved some items to under a Tools dropdown on the Dashboard User Cards",
      },
    ],
    fixes: [
      {
        description: "Stopped Cap-ons counting towards Challenges",
        thanks: "c-bn and Noisette",
      },
    ],
  },
  {
    build: 9,
    date: "2021-02-20",
    features: [
      {
        title: "Bouncer Maps",
        description:
          "Bouncer Maps have now returned with much better performance! Head to the Bouncers section of the App and tap on a Munzee or the Map Icon next to a category name!",
      },
    ],
    improvements: [
      {
        description:
          "Replaced the message that displayed when you'd completed a week of ZeeOps with a clearer design",
        thanks: "Citygalbex",
      },
    ],
  },
  {
    build: 10,
    date: "2021-02-20",
    improvements: [
      {
        description: "Added settings for the User Inventory",
        thanks: "PelicanRouge",
      },
      {
        description:
          "Moved some items (eg. Evolutions, Virtuals, Jewel Shards, Destination Credits) into more appropriate categories",
        thanks: "PelicanRouge and jnorval",
      },
    ],
    fixes: [
      {
        description: "Adjusted Icon Size on Maps to scale for devices with different pixel ratios",
      },
    ],
  },
  {
    build: 11,
    date: "2021-02-20",
    improvements: [
      {
        description: "Added Countdown to next month's Clan Requirements release",
      },
      {
        description: "Increased Icon Size on Maps for easier viewing",
      },
      {
        description: "Removed various debug information from the app",
      },
    ],
    fixes: [
      {
        description: "Fixed data displayed on Clan Rewards table",
      },
    ],
  },
  {
    build: 12,
    date: "2021-02-20",
    features: [
      {
        title: "Munzee Details",
        description:
          "You can now tap on a Munzee in most places in the app to view details about it!",
      },
    ],
    improvements: [
      {
        description: "Fixed the Activity displayed on the profile page.",
        thanks: "TSwag",
      },
    ],
  },
  {
    build: 13,
    date: "2021-02-20",
    improvements: [
      {
        description: "Added some additional tips and hints to the app",
        thanks: "Barrowman1",
      },
    ],
    fixes: [
      {
        description:
          'Removed the "Bookmarked Clans" button from the Dashboard when no clans are bookmarked.',
      },
      {
        description: "Fixed colour labels not displaying on mobile in Personalisation settings.",
      },
    ],
  },
  {
    build: 14,
    date: "2021-02-20",
    improvements: [
      {
        description: 'Added "Clan Requirements" button to Clans Card on Dashboard',
        thanks: "Barrowman1",
      },
    ],
  },
  {
    build: 15,
    date: "2021-02-20",
    improvements: [
      {
        description: "Fixed the Static Location editor popup",
      },
    ],
  },
  {
    build: 16,
    date: "2021-02-22",
    improvements: [
      {
        description: "Text on Clan Stats is now bold for rows with Bookmarked Users",
        thanks: "Oddleif65",
      },
      {
        description: "Clan Progress now redirects to Clan Stats for people not in a clan",
      },
    ],
    fixes: [
      {
        description: "Fixed Text Centring on Clan Stats",
      },
      {
        description: "Fixed Arrow Icon colour on Bookmarks Settings in Dark Mode",
      },
    ],
  },
  {
    build: 17,
    date: "2021-02-23",
    improvements: [
      {
        description: "Added a link to nzseries1's POI Planner",
        thanks: "nzseries1",
      },
      {
        description: "Separated deploys on User Activity into \"Deploys\" and \"Passive Deploys\".",
      },
    ],
  },
];

export default builds;