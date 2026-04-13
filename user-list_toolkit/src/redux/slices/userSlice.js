import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },

    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },

    updateUser: (state, action) => {
      const { id, updatedData } = action.payload;
      const user = state.find((u) => u.id === id);

      if (user) {
        user.name = updatedData.name;
        user.age = updatedData.age;
        user.email = updatedData.email;
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
