import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface RegionOption {
  id: string;
  name: string;
  code: string;
  flag: string;
  currencySymbol: string;
  continent?: string;
  phonePrefix?: string;
}

export interface RegionState {
  selectedRegion: string;
  availableRegions: RegionOption[];
}

const initialState: RegionState = {
  selectedRegion: "global",
  availableRegions: [
    {
      id: "global",
      name: "Global (All)",
      code: "GLB",
      flag: "🌐",
      currencySymbol: "$",
      continent: "Worldwide",
      phonePrefix: "+1",
    },
    {
      id: "india",
      name: "India",
      code: "IN",
      flag: "🇮🇳",
      currencySymbol: "₹",
      continent: "Asia",
      phonePrefix: "+91",
    },
    {
      id: "china",
      name: "China",
      code: "CN",
      flag: "🇨🇳",
      currencySymbol: "¥",
      continent: "Asia",
      phonePrefix: "+86",
    },
    {
      id: "united-states",
      name: "United States",
      code: "US",
      flag: "🇺🇸",
      currencySymbol: "$",
      continent: "North America",
      phonePrefix: "+1",
    },
    {
      id: "united-kingdom",
      name: "United Kingdom",
      code: "GB",
      flag: "🇬🇧",
      currencySymbol: "£",
      continent: "Europe",
      phonePrefix: "+44",
    },
    {
      id: "united-arab-emirates",
      name: "United Arab Emirates",
      code: "AE",
      flag: "🇦🇪",
      currencySymbol: "AED",
      continent: "Middle East",
      phonePrefix: "+971",
    },
    {
      id: "singapore",
      name: "Singapore",
      code: "SG",
      flag: "🇸🇬",
      currencySymbol: "S$",
      continent: "Asia",
      phonePrefix: "+65",
    },
    {
      id: "germany",
      name: "Germany",
      code: "DE",
      flag: "🇩🇪",
      currencySymbol: "€",
      continent: "Europe",
      phonePrefix: "+49",
    },
    {
      id: "australia",
      name: "Australia",
      code: "AU",
      flag: "🇦🇺",
      currencySymbol: "A$",
      continent: "Oceania",
      phonePrefix: "+61",
    },
    {
      id: "canada",
      name: "Canada",
      code: "CA",
      flag: "🇨🇦",
      currencySymbol: "C$",
      continent: "North America",
      phonePrefix: "+1",
    },
    {
      id: "japan",
      name: "Japan",
      code: "JP",
      flag: "🇯🇵",
      currencySymbol: "¥",
      continent: "Asia",
      phonePrefix: "+81",
    },
    {
      id: "france",
      name: "France",
      code: "FR",
      flag: "🇫🇷",
      currencySymbol: "€",
      continent: "Europe",
      phonePrefix: "+33",
    },
    {
      id: "saudi-arabia",
      name: "Saudi Arabia",
      code: "SA",
      flag: "🇸🇦",
      currencySymbol: "SAR",
      continent: "Middle East",
      phonePrefix: "+966",
    },
    {
      id: "brazil",
      name: "Brazil",
      code: "BR",
      flag: "🇧🇷",
      currencySymbol: "R$",
      continent: "South America",
      phonePrefix: "+55",
    },
    {
      id: "south-africa",
      name: "South Africa",
      code: "ZA",
      flag: "🇿🇦",
      currencySymbol: "R",
      continent: "Africa",
      phonePrefix: "+27",
    },
    {
      id: "indonesia",
      name: "Indonesia",
      code: "ID",
      flag: "🇮🇩",
      currencySymbol: "Rp",
      continent: "Asia",
      phonePrefix: "+62",
    },
    {
      id: "malaysia",
      name: "Malaysia",
      code: "MY",
      flag: "🇲🇾",
      currencySymbol: "RM",
      continent: "Asia",
      phonePrefix: "+60",
    },
    {
      id: "philippines",
      name: "Philippines",
      code: "PH",
      flag: "🇵🇭",
      currencySymbol: "₱",
      continent: "Asia",
      phonePrefix: "+63",
    },
    {
      id: "mexico",
      name: "Mexico",
      code: "MX",
      flag: "🇲🇽",
      currencySymbol: "MX$",
      continent: "North America",
      phonePrefix: "+52",
    },
    {
      id: "spain",
      name: "Spain",
      code: "ES",
      flag: "🇪🇸",
      currencySymbol: "€",
      continent: "Europe",
      phonePrefix: "+34",
    },
    {
      id: "italy",
      name: "Italy",
      code: "IT",
      flag: "🇮🇹",
      currencySymbol: "€",
      continent: "Europe",
      phonePrefix: "+39",
    },
    {
      id: "netherlands",
      name: "Netherlands",
      code: "NL",
      flag: "🇳🇱",
      currencySymbol: "€",
      continent: "Europe",
      phonePrefix: "+31",
    },
    {
      id: "switzerland",
      name: "Switzerland",
      code: "CH",
      flag: "🇨🇭",
      currencySymbol: "CHF",
      continent: "Europe",
      phonePrefix: "+41",
    },
    {
      id: "south-korea",
      name: "South Korea",
      code: "KR",
      flag: "🇰🇷",
      currencySymbol: "₩",
      continent: "Asia",
      phonePrefix: "+82",
    },
    {
      id: "nigeria",
      name: "Nigeria",
      code: "NG",
      flag: "🇳🇬",
      currencySymbol: "₦",
      continent: "Africa",
      phonePrefix: "+234",
    },
    {
      id: "kenya",
      name: "Kenya",
      code: "KE",
      flag: "🇰🇪",
      currencySymbol: "KSh",
      continent: "Africa",
      phonePrefix: "+254",
    },
  ],
};

export const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    setRegion: (state, action: PayloadAction<string>) => {
      state.selectedRegion = action.payload;
    },
  },
});

export const { setRegion } = regionSlice.actions;

export default regionSlice.reducer;
