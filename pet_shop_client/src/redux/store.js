import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../redux/slices/homeSlice";

const store = configureStore({
  reducer: {
    homeSlice: homeSlice,
  },
});

export default store;
