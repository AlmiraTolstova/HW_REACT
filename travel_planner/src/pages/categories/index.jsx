import { Link } from "react-router-dom";
import { initialCategories } from "../../data.js";
function Categories() {
  return (
    <div className="districts">
      <h1>Районы города</h1>
      <p className="subtitle">
        Выберите район, чтобы узнать о его достопримечательностях
      </p>
      <div className="districts-grid">
        {initialCategories.map((category) => (
          <Link
            to={`/categories/${category.id}`}
            key={category.id}
            className="district-card"
          >
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <div className="card-footer">
              <span className="places-count">
                {category.places.length} мест
              </span>
              <span className="view-link">Подробнее →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Categories;
