import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import playerReducer from "./slices/playerSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    player: playerReducer,
  },
});
