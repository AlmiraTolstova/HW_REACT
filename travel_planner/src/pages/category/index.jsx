import { useParams, Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import StoreContext from "../../context/storeContext";
import { Spin } from "antd";
import { useEffect } from "react";
import { useState } from "react";

function Category() {
  const { categoryId } = useParams();
  const { CategoriesPlaces } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  const district = CategoriesPlaces.find(
    (district) => district.id === categoryId,
  );
  return (
    <div className="district-page">
      <Spin spinning={loading}>
        {!loading ? (
          <div>
            <div className="district-header">
              <Link to="/categories" className="back-link">
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
        ) : (
          <div></div>
        )}
      </Spin>
    </div>
  );
}
export default Category;
