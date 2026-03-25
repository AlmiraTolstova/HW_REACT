import { useContext } from "react";
import ProductsContext from "../../context";

function Basket() {
  const { cartData, deleteFromCart } = useContext(ProductsContext);

  return (
    <div>
      <h2>Корзина</h2>

      {cartData.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => deleteFromCart(item.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
}

export default Basket;
