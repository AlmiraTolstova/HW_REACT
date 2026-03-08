import { Link } from "react-router-dom";
import { useContext } from "react";
import StoreContext from "../../context/storeContext";
import { Spin } from "antd";
import { useState } from "react";
import { useEffect } from "react";

function Categories() {
  const { CategoriesPlaces } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <div className="districts">
      <Spin spinning={loading}>
        {!loading ? (
          <div>
            <h1>Районы города</h1>
            <p className="subtitle">
              Выберите район, чтобы узнать о его достопримечательностях
            </p>
            <div className="districts-grid">
              {CategoriesPlaces.map((category) => (
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
        ) : (
          <div></div>
        )}
      </Spin>
    </div>
  );
}
export default Categories;
