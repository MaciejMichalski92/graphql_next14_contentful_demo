import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface ThemeState {
  theme: "light" | "dark";
}

const initialState: ThemeState = {
  theme: "light",
};

export const themeTestSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    switchTheme: (store) => {
      if (store.theme == "light") store.theme = "dark";
      else store.theme = "light";
    },
  },
});

export const { switchTheme } = themeTestSlice.actions;

export const selectTheme = (state: RootState) => state.themeReducer.theme;

export default themeTestSlice.reducer;
