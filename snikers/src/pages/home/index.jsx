import { useContext } from "react";
import ProductsContext from "../../context";

function Home() {
  const { products, addToCart } = useContext(ProductsContext);

  return (
    <div>
      <h2>Товары</h2>

      {products.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => addToCart(item)}>Добавить в корзину</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
