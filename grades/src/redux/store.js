import { configureStore } from "@reduxjs/toolkit";
import journalReducer from "../redux/slices/journalSlice";

const store = configureStore({
  reducer: {
    journal: journalReducer,
  },
});

export default store;
