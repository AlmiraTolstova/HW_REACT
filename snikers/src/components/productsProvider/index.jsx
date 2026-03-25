import { useState, useEffect } from "react";
import ProductsContext from "../../context";
import axios from "axios";

const BASE_URL = "https://69c39e40b780a9ba03e75a03.mockapi.io";

function ProductProvider({ children }) {
  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get(`${BASE_URL}/productsData`);
    setProducts(res.data);
  };

  const fetchCartData = async () => {
    const res = await axios.get(`${BASE_URL}/cartData`);
    setCartData(res.data);
  };

  const addToCart = async (product) => {
    const res = await axios.post(`${BASE_URL}/cartData`, product);
    setCartData((prev) => [...prev, res.data]);
  };

  const deleteFromCart = async (id) => {
    await axios.delete(`${BASE_URL}/cartData/${id}`);
    setCartData((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    fetchProducts();
    fetchCartData();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        cartData,
        addToCart,
        deleteFromCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductProvider;
