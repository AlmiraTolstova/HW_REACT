import { useContext } from "react";
import StoreContext from "../../context/storeContext";
import { useEffect } from "react";
import { useState } from "react";
import { Spin } from "antd";

function Favorites() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  const { favorites } = useContext(StoreContext);
  return (
    <div>
      <Spin spinning={loading}>
        {!loading ? (
          <div>
            {favorites.map((place) => {
              return <div key={place.id}>{place.id}</div>;
            })}
          </div>
        ) : (
          <div></div>
        )}
      </Spin>
    </div>
  );
}

export default Favorites;
