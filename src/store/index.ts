import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "./slices/regionSlice";
import languageReducer from "./slices/languageSlice";
import blogReducer from "./slices/blogSlice";
import inquiryReducer from "./slices/inquirySlice";
import siteSettingsReducer from "./slices/siteSettingsSlice";

export const store = configureStore({
  reducer: {
    region: regionReducer,
    language: languageReducer,
    blog: blogReducer,
    inquiry: inquiryReducer,
    siteSettings: siteSettingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
