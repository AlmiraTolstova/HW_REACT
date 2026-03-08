import { useState } from "react";
import StoreContext from "../../context/storeContext";
import { initialCategories } from "../../data";
export const StoreProvider = ({ children }) => {
  const [CategoriesPlaces] = useState(initialCategories);
  const [favorites, setFavorites] = useState([]);

  return (
    <StoreContext.Provider
      value={{ CategoriesPlaces, favorites, setFavorites }}
    >
      {children}
    </StoreContext.Provider>
  );
};
