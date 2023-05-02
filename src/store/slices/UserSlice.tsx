import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// inteface for the types
interface UserState {
  firstname: string;
  lastname: string;
  status: string;
}

// Define the initial state using that type
const initialState: UserState[] = [];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer function for Adding a User.
    addUser(state, action: PayloadAction<UserState>) {
      state.push(action.payload); // Simply push the new user details
    },
    // Reducer function for Deleting a User.
    deleteUser(state, action) {
      state.splice(action.payload, 1); // Remove the user from the state
    },
    // Reducer function for Updating a User.
    udpdateUser(state, action) {
      const newState = [...state]; // making copy of the state
      newState[action.payload.index] = {
        // updating the properties of the particular user detected by the index number
        ...newState[action.payload.index],
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        status: action.payload.status,
      };
      return newState; // returning new state
    },
  },
});

export default userSlice.reducer;

export const { addUser, deleteUser, udpdateUser } = userSlice.actions;
