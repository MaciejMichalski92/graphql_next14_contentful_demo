import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

export const reducer = {
  themeReducer,
};

export const store = configureStore({
  reducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
