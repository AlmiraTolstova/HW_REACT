import { useParams, Link, Navigate } from "react-router-dom";
import { initialCategories } from "../../data.js";
function Category() {
  const { categoryId } = useParams();
  const district = initialCategories.find(
    (district) => district.id === categoryId,
  );
  return (
    <div className="district-page">
      <div className="district-header">
        <Link to="/districts" className="back-link">
          ← Назад к категориям
        </Link>
        <h1>{district.name}</h1>
        <p className="district-description">{district.description}</p>
      </div>
      <div className="places-section">
        <h2>Достопримечательности категории</h2>
        <div className="places-grid">
          {district.places.map((place) => (
            <Link
              to={`/categories/${categoryId}/places/${place.id}`}
              key={place.id}
              className="place-card"
            >
              <div className="place-emoji">{place.image}</div>
              <div className="place-info">
                <h3>{place.name}</h3>
                <p>{place.description.substring(0, 60)}...</p>
                <span className="view-details">Подробнее →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Category;
