import { configureStore } from "@reduxjs/toolkit";
import userSlice from "store/slices/UserSlice";
import toggleSlice from "./slices/ToggleSlice";

const store = configureStore({
  // root reducer
  reducer: {
    users: userSlice,
    toggle: toggleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
