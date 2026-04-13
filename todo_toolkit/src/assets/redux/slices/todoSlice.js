import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state) {},
    toggleTodo(state) {},
    deleteTodo(state) {},
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
