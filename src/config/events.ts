export interface RunEvent {
  id: string;
  date: string;
  location: string;
  locationEn: string;
  lumaUrl: string;
  lumaEventId: string;
}

export const events: readonly RunEvent[] = [
  {
    id: "oirschotse-heide-zuidoost-2026-09-19",
    date: "2026-09-19T13:30:00+02:00",
    location: "Oirschotse Heide Zuidoost",
    locationEn: "Oirschotse Heide South East",
    lumaUrl: "https://luma.com/c22abj6v",
    lumaEventId: "evt-xA1E8ZiZ54SpPN2",
  },
  {
    id: "aarlesche-heide-west-2026-10-17",
    date: "2026-10-17T13:30:00+02:00",
    location: "Aarlesche Heide West",
    locationEn: "Aarlesche Heide West",
    lumaUrl: "https://luma.com/3or9dqzl",
    lumaEventId: "evt-r30gvykpF5FT3gO",
  },
  {
    id: "oirschotse-heide-noordwest-2026-11-14",
    date: "2026-11-14T13:30:00+01:00",
    location: "Oirschotse Heide Noordwest",
    locationEn: "Oirschotse Heide North West",
    lumaUrl: "https://luma.com/jqudeaf4",
    lumaEventId: "evt-CjeWp5Ds8BWAEWx",
  },
] as const;
