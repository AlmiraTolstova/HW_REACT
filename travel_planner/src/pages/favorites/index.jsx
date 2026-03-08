import { useContext } from "react";
import StoreContext from "../../context/storeContext";

function Favorites() {
  const { favorites } = useContext(StoreContext);
  return (
    <div>
      {favorites.map((place) => {
        return <div key={place.id}>{place.id}</div>;
      })}
    </div>
  );
}

export default Favorites;
