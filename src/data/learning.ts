export const principles = [
  ["Love", "Care for one another with compassion."],
  ["Peace", "Nurture calmness, understanding and harmony."],
  ["Truth", "Value sincerity and truthfulness."],
  ["Right Conduct", "Put good values into everyday action."],
  ["Non-violence", "Respect others through thought, word and action."],
] as const;

export type Session = {
  name: string;
  type: string;
  day: string;
  time: string;
  age: string;
  location: string;
  restricted?: boolean;
  stat?: string;
};

export const adultSessions: Session[] = [
  {
    name: "Vedam & Vedanta Classes",
    type: "Online",
    day: "Thursday",
    time: "20:30–22:00",
    age: "Adults",
    location: "UK · USA · Ireland · India",
  },
  {
    name: "Vedam Classes",
    type: "Online",
    day: "Friday",
    time: "11:30–12:30",
    age: "Adults",
    location: "Mysore, Karnataka, India",
    restricted: true,
  },
  {
    name: "Vedam Classes",
    type: "Face-to-Face",
    day: "Saturday",
    time: "15:30–16:30",
    age: "Children & Adults",
    location: "St. Aidans Community Centre, Princes Rd, Newcastle upon Tyne NE3 5TT",
  },
  {
    name: "Dharma Sundays",
    type: "Face-to-Face",
    day: "Sunday",
    time: "11:30–13:00",
    age: "Children & Parents",
    location: "Hindu Temple Newcastle, 172 West Rd, Newcastle upon Tyne NE4 9QB",
    stat: "60+ participants",
  },
];

export const childSessions: Session[] = [
  ["Children Group 1", "Thursday", "19:30–20:30"],
  ["Children Group 2", "Friday", "20:00–21:00"],
  ["Children Group 3", "Wednesday", "20:00–21:00"],
  ["Children Group 4", "Monday", "18:00–19:00"],
  ["Children Group 5", "Wednesday", "17:00–18:00"],
].map(([name, day, time]) => ({
  name,
  type: "Online",
  day,
  time,
  age: "Children",
  location: "Online",
  restricted: true,
}));
