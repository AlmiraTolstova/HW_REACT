import { createContext } from "react";

const StoreContext = createContext({
  CategoriesPlaces: [],
  favorites: [],
  setFavorites: () => {},
  statisticsData: {},
});
export default StoreContext;
