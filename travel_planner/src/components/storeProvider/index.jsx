import { useState } from "react";
import StoreContext from "../../context/storeContext";
import { initialCategories } from "../../data";
export const StoreProvider = ({ children }) => {
  const [CategoriesPlaces, setCategoriesPlaces] = useState(initialCategories);
  const [favorites, setFavorites] = useState([]);

  return (
    <StoreContext.Provider
      value={{ CategoriesPlaces, setCategoriesPlaces, favorites, setFavorites }}
    >
      {children}
    </StoreContext.Provider>
  );
};
