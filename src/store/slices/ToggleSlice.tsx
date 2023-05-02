import { createSlice } from "@reduxjs/toolkit";

// inteface for the types
interface IToggleState {
  toggle: boolean;
}

// Define the initial state using that type
const initialState: IToggleState = { toggle: false };

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    // reducer function to change toggle state
    changeToggle(state) {
      state.toggle = !state.toggle; // changing the toggle state based on previous toggle state
    },
  },
});

export default toggleSlice.reducer;

export const { changeToggle } = toggleSlice.actions;
