import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../redux/slices/homeSlice";
import basketSlice from "../redux/slices/basketSlice";

const store = configureStore({
  reducer: {
    homeSlice: homeSlice,
    basketSlice: basketSlice,
  },
});

export default store;
