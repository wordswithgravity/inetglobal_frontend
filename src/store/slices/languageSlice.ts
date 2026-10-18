import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface LanguageOption {
  id: string; // e.g. 'en', 'es', 'zh', 'hi', 'ar', etc.
  name: string; // Native name
  englishName: string; // English name
  code: string; // ISO code uppercase
  flag: string; // Flag emoji
  dir?: "ltr" | "rtl";
}

export interface LanguageState {
  selectedLanguage: string;
  availableLanguages: LanguageOption[];
}

const initialState: LanguageState = {
  selectedLanguage: "en",
  availableLanguages: [
    {
      id: "en",
      name: "English",
      englishName: "English",
      code: "EN",
      flag: "🌐",
      dir: "ltr",
    },
    {
      id: "es",
      name: "Español",
      englishName: "Spanish",
      code: "ES",
      flag: "🇪🇸",
      dir: "ltr",
    },
    {
      id: "zh",
      name: "中文 (简体)",
      englishName: "Chinese (Simplified)",
      code: "ZH",
      flag: "🇨🇳",
      dir: "ltr",
    },
    {
      id: "hi",
      name: "हिन्दी",
      englishName: "Hindi",
      code: "HI",
      flag: "🇮🇳",
      dir: "ltr",
    },
    {
      id: "ar",
      name: "العربية",
      englishName: "Arabic",
      code: "AR",
      flag: "🇦🇪",
      dir: "rtl",
    },
    {
      id: "fr",
      name: "Français",
      englishName: "French",
      code: "FR",
      flag: "🇫🇷",
      dir: "ltr",
    },
    {
      id: "de",
      name: "Deutsch",
      englishName: "German",
      code: "DE",
      flag: "🇩🇪",
      dir: "ltr",
    },
    {
      id: "ja",
      name: "日本語",
      englishName: "Japanese",
      code: "JA",
      flag: "🇯🇵",
      dir: "ltr",
    },
    {
      id: "pt",
      name: "Português",
      englishName: "Portuguese",
      code: "PT",
      flag: "🇧🇷",
      dir: "ltr",
    },
    {
      id: "ru",
      name: "Русский",
      englishName: "Russian",
      code: "RU",
      flag: "🇷🇺",
      dir: "ltr",
    },
    {
      id: "it",
      name: "Italiano",
      englishName: "Italian",
      code: "IT",
      flag: "🇮🇹",
      dir: "ltr",
    },
    {
      id: "ko",
      name: "한국어",
      englishName: "Korean",
      code: "KO",
      flag: "🇰🇷",
      dir: "ltr",
    },
    {
      id: "nl",
      name: "Nederlands",
      englishName: "Dutch",
      code: "NL",
      flag: "🇳🇱",
      dir: "ltr",
    },
    {
      id: "tr",
      name: "Türkçe",
      englishName: "Turkish",
      code: "TR",
      flag: "🇹🇷",
      dir: "ltr",
    },
    {
      id: "id",
      name: "Bahasa Indonesia",
      englishName: "Indonesian",
      code: "ID",
      flag: "🇮🇩",
      dir: "ltr",
    },
    {
      id: "vi",
      name: "Tiếng Việt",
      englishName: "Vietnamese",
      code: "VI",
      flag: "🇻🇳",
      dir: "ltr",
    },
    {
      id: "pl",
      name: "Polski",
      englishName: "Polish",
      code: "PL",
      flag: "🇵🇱",
      dir: "ltr",
    },
    {
      id: "th",
      name: "ไทย",
      englishName: "Thai",
      code: "TH",
      flag: "🇹🇭",
      dir: "ltr",
    },
    {
      id: "tl",
      name: "Filipino",
      englishName: "Tagalog",
      code: "TL",
      flag: "🇵🇭",
      dir: "ltr",
    },
    {
      id: "bn",
      name: "বাংলা",
      englishName: "Bengali",
      code: "BN",
      flag: "🇧🇩",
      dir: "ltr",
    },
    {
      id: "ta",
      name: "தமிழ்",
      englishName: "Tamil",
      code: "TA",
      flag: "🇮🇳",
      dir: "ltr",
    },
    {
      id: "te",
      name: "తెలుగు",
      englishName: "Telugu",
      code: "TE",
      flag: "🇮🇳",
      dir: "ltr",
    },
    {
      id: "mr",
      name: "मराठी",
      englishName: "Marathi",
      code: "MR",
      flag: "🇮🇳",
      dir: "ltr",
    },
    {
      id: "sw",
      name: "Kiswahili",
      englishName: "Swahili",
      code: "SW",
      flag: "🇰🇪",
      dir: "ltr",
    },
    {
      id: "sv",
      name: "Svenska",
      englishName: "Swedish",
      code: "SV",
      flag: "🇸🇪",
      dir: "ltr",
    },
    {
      id: "el",
      name: "Ελληνικά",
      englishName: "Greek",
      code: "EL",
      flag: "🇬🇷",
      dir: "ltr",
    },
    {
      id: "cs",
      name: "Čeština",
      englishName: "Czech",
      code: "CS",
      flag: "🇨🇿",
      dir: "ltr",
    },
    {
      id: "ro",
      name: "Română",
      englishName: "Romanian",
      code: "RO",
      flag: "🇷🇴",
      dir: "ltr",
    },
    {
      id: "hu",
      name: "Magyar",
      englishName: "Hungarian",
      code: "HU",
      flag: "🇭🇺",
      dir: "ltr",
    },
    {
      id: "uk",
      name: "Українська",
      englishName: "Ukrainian",
      code: "UK",
      flag: "🇺🇦",
      dir: "ltr",
    },
    {
      id: "he",
      name: "עברית",
      englishName: "Hebrew",
      code: "HE",
      flag: "🇮🇱",
      dir: "rtl",
    },
  ],
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
