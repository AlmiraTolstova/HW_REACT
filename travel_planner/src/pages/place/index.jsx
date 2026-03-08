import { useParams, Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import StoreContext from "../../context/storeContext";
import { useEffect } from "react";
import { useState } from "react";
import { Spin } from "antd";

const Place = () => {
  const { categoryId, placeId } = useParams();
  const { CategoriesPlaces, setCategoriesPlaces, favorites, setFavorites } =
    useContext(StoreContext);

  const [loading, setLoading] = useState(true);
  const [taskDescription, setTaskDescription] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  // Ищем район
  const district = CategoriesPlaces.find((d) => d.id === categoryId);
  // Если район не найден - 404
  if (!district) {
    return <Navigate to="/404" replace />;
  }
  // Ищем место в районе
  const place = district.places.find((p) => p.id === placeId);

  const inFavorites = favorites.some((item) => item.id === place.id);
  function handleNewFavorite(place) {
    if (!inFavorites) {
      setFavorites((prev) => [...prev, place]);
    }
  }

  function handleDelFavorite(place) {
    if (inFavorites) {
      const newFavorites = favorites.filter((item) => item.id !== place.id);
      setFavorites(newFavorites);
    }
  }

  function handleCheckBox(value, item) {
    setCategoriesPlaces((prev) =>
      prev.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              places: category.places.map((p) =>
                p.id === placeId
                  ? {
                      ...p,
                      todos: p.todos.map((todo) =>
                        todo.id === item.id
                          ? { ...todo, completed: !todo.completed }
                          : todo,
                      ),
                    }
                  : p,
              ),
            }
          : category,
      ),
    );
  }

  function handleNewTask() {
    setCategoriesPlaces((prev) =>
      prev.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              places: category.places.map((p) =>
                p.id === placeId
                  ? {
                      ...p,
                      todos: [
                        ...p.todos,
                        {
                          id: p.todos.length + 1,
                          text: taskDescription,
                          completed: false,
                        },
                      ],
                    }
                  : p,
              ),
            }
          : category,
      ),
    );
    setTaskDescription("");
  }

  // Если место не найдено - показываем сообщение
  if (!place) {
    return (
      <div className="place-not-found">
        <h2>Место не найдено</h2>
        <p>
          Извините, достопримечательность с таким названием не существует в этом
          районе.
        </p>
        <Link to={`/categories/${categoryId}`} className="back-button">
          Вернуться к району
        </Link>
      </div>
    );
  }
  return (
    <div className="place-page">
      <Spin spinning={loading}>
        {!loading ? (
          <div>
            <div className="place-header">
              <Link to={`/categories/${categoryId}`} className="back-link">
                ← Назад к району
              </Link>
            </div>
            <div className="place-detail">
              <div className="place-emoji-large">{place.image}</div>
              <h1>{place.name}</h1>
              <p className="place-full-description">{place.description}</p>
              <ul>
                {place.todos.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.text}
                      <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={(e) => {
                          handleCheckBox(e.target.checked, item);
                        }}
                      ></input>
                      <button>Удалить задачу</button>
                    </li>
                  );
                })}
              </ul>
              <div>
                <input
                  placeholder="новая задача"
                  value={taskDescription}
                  onChange={(e) => {
                    setTaskDescription(e.target.value);
                  }}
                ></input>
                <button onClick={handleNewTask}>Добавить задачу</button>
              </div>
              <div className="place-meta">
                <div className="meta-item">
                  <span className="meta-label">Категория:</span>
                  <Link to={`/categories/${categoryId}`} className="meta-value">
                    {district.name}
                  </Link>
                </div>
              </div>
              {/* Кнопка "Назад" */}
              <button
                onClick={() => window.history.back()}
                className="back-button"
              >
                ← Назад
              </button>
              <button
                onClick={() => handleNewFavorite(place)}
                className="back-button"
                style={{ display: inFavorites ? "none" : "flex" }}
              >
                Добавить в избранное
              </button>
              <button
                onClick={() => handleDelFavorite(place)}
                className="back-button"
                style={{ display: !inFavorites ? "none" : "flex" }}
              >
                Удалить из избранного
              </button>
              {inFavorites ? <p>В избранном</p> : <p></p>}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </Spin>
    </div>
  );
};
export default Place;
