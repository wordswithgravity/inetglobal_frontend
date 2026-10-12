import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "./slices/regionSlice";
import languageReducer from "./slices/languageSlice";
import blogReducer from "./slices/blogSlice";

export const store = configureStore({
  reducer: {
    region: regionReducer,
    language: languageReducer,
    blog: blogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
