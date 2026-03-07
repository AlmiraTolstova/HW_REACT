import { useState } from "react";
import StoreContext from "../../context/storeContext";
import { initialCategories } from "../../data";
export const StoreProvider = ({ children }) => {
  const [CategoriesPlaces] = useState(initialCategories);

  return (
    <StoreContext.Provider value={{ CategoriesPlaces }}>
      {children}
    </StoreContext.Provider>
  );
};
