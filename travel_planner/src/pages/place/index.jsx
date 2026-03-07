import { useParams, Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import StoreContext from "../../context/storeContext";

const Place = () => {
  const { categoryId, placeId } = useParams();
  const { CategoriesPlaces } = useContext(StoreContext);

  // Ищем район
  const district = CategoriesPlaces.find((d) => d.id === categoryId);
  // Если район не найден - 404
  if (!district) {
    return <Navigate to="/404" replace />;
  }
  // Ищем место в районе
  const place = district.places.find((p) => p.id === placeId);
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
      <div className="place-header">
        <Link to={`/categories/${categoryId}`} className="back-link">
          ← Назад к району
        </Link>
      </div>
      <div className="place-detail">
        <div className="place-emoji-large">{place.image}</div>
        <h1>{place.name}</h1>
        <p className="place-full-description">{place.description}</p>
        <div className="place-meta">
          <div className="meta-item">
            <span className="meta-label">Район:</span>
            <Link to={`/categories/${categoryId}`} className="meta-value">
              {district.name}
            </Link>
          </div>
        </div>
        {/* Кнопка "Назад" */}
        <button onClick={() => window.history.back()} className="back-button">
          ← Назад
        </button>
      </div>
    </div>
  );
};
export default Place;
