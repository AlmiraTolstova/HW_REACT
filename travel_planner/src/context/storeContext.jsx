import { createContext } from "react";

const StoreContext = createContext({
  CategoriesPlaces: [],
  favorites: [],
  setFavorites: () => {},
});
export default StoreContext;
