import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "./slices/regionSlice";
import languageReducer from "./slices/languageSlice";

export const store = configureStore({
  reducer: {
    region: regionReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
