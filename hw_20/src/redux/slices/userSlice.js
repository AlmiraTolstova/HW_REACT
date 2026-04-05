import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    usersList: [
      {
        id: 0,
        name: "Alice",
        email: "alice@example.com",
      },
      {
        id: 1,
        name: "Bob",
        email: "bob@example.com",
      },
      {
        id: 2,
        name: "Charlie",
        email: "charlie@example.com",
      },
    ],
  },
  reducers: {
    reset: (state, action) => {
      console.log(action.type);
      state.usersList = [];
    },
  },
});

export const { reset } = userSlice.actions;
export default userSlice;
