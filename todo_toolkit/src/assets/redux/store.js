import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../redux/slices/todoSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
