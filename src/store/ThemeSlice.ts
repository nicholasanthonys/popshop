import { getDataFromLocalStorage } from "../utils/localStorage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  value: string | undefined;
}

// Define the initial state using that type
const initialState: ThemeState = {
  value: getDataFromLocalStorage("theme")?.theme,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
