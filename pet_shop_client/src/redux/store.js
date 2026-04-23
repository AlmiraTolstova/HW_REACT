import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../redux/slices/homeSlice";
import basketSlice from "../redux/slices/basketSlice";

const loadState = () => {
  try {
    const serialized = localStorage.getItem("appState");
    if (!serialized) return undefined;

    return JSON.parse(serialized);
  } catch (e) {
    console.log("error with loading state from localStorage:", e);
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    homeSlice: homeSlice,
    basketSlice: basketSlice,
  },
  preloadedState: loadState(),
});

// подписка на изменения корзины
store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem(
    "appState",
    JSON.stringify({
      basketSlice: state.basketSlice,
      homeSlice: state.homeSlice,
    }),
  );
});

export default store;
