const BASE_URL = "http://localhost:3333";

export const API = {
  Home: {
    getCaterories: () => `${BASE_URL}/categories/all`,
    getProducts: () => `${BASE_URL}/products/all`,
    getDiscount: () => `${BASE_URL}/sale/send`,
  },
  Basket: {
    getAllOrders: () => `${BASE_URL}/order/send`,
    postOrder: () => `${BASE_URL}/order/send`,
  },
};
