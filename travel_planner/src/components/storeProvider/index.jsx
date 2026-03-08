import { useState } from "react";
import StoreContext from "../../context/storeContext";
import { initialCategories } from "../../data";
import { useEffect } from "react";
export const StoreProvider = ({ children }) => {
  const [CategoriesPlaces, setCategoriesPlaces] = useState(initialCategories);
  const [favorites, setFavorites] = useState([]);
  const [statisticsData, setStatisticsData] = useState({
    placesCount: 0,
    favoritesCount: 0,
    taskCount: 0,
    taskCompletedCount: 0,
  });

  function updateStatistics() {
    const placesCount = CategoriesPlaces.reduce(
      (total, category) => total + category.places.length,
      0,
    );
    const favoritesCount = favorites.length;

    const totalTodos = CategoriesPlaces.reduce((total, category) => {
      // суммируем todos всех мест в категории
      const todosInCategory = category.places.reduce(
        (placeTotal, place) => placeTotal + place.todos.length,
        0,
      );

      return total + todosInCategory;
    }, 0);

    const taskCompletedCount = CategoriesPlaces.reduce((total, category) => {
      // суммируем выполненные todos всех мест в категории
      const completedInCategory = category.places.reduce(
        (placeTotal, place) => {
          const completedInPlace = place.todos.filter(
            (todo) => todo.completed,
          ).length;
          return placeTotal + completedInPlace;
        },
        0,
      );

      return total + completedInCategory;
    }, 0);
    setStatisticsData({
      placesCount: placesCount,
      favoritesCount: favoritesCount,
      taskCount: totalTodos,
      taskCompletedCount: taskCompletedCount,
    });
  }

  useEffect(() => {
    const savedData = localStorage.getItem("savedCategories");
    if (savedData) {
      setCategoriesPlaces(JSON.parse(savedData));
    }

    const savedFavoritesData = localStorage.getItem("savedFavorites");
    if (savedData) {
      setFavorites(JSON.parse(savedFavoritesData));
    }
    updateStatistics();
  }, []);

  // Сохраняем данные в localStorage при изменении CategoriesPlaces
  useEffect(() => {
    localStorage.setItem("savedCategories", JSON.stringify(CategoriesPlaces));
    updateStatistics();
  }, [CategoriesPlaces]);

  //то же для favorites
  useEffect(() => {
    localStorage.setItem("savedFavorites", JSON.stringify(favorites));
    updateStatistics();
  }, [favorites]);

  return (
    <StoreContext.Provider
      value={{
        CategoriesPlaces,
        setCategoriesPlaces,
        favorites,
        setFavorites,
        statisticsData,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
