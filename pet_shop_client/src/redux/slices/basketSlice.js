import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../api/api";
import { Status } from "../../utils/Status";

//-------------получение всех заказов----------------//
export const getAllOrders = createAsyncThunk("home/get_allorders", async () => {
  const response = await axios.get(API.Basket.getAllOrders(), {});
  return response.data;
});

//-------------отправка заказа-----------------------//
export const postOrder = createAsyncThunk(
  "home/post_order",
  async (_, { getState }) => {
    const response = await axios.post(
      API.Basket.postOrder(),
      getState().basketSlice.ordersList,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  },
);

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    ordersList: {
      name: "John Doe",
      phone: "1234567890",
      email: "johndoe@example.com",
      products: [],
    },
    getOrderList: [],
    orderStatusState: [],
    ordersListStatus: Status.NO_STATUS,
    postOrderStatus: Status.NO_STATUS,
  },
  reducers: {
    setUsersData: (state, action) => {
      state.ordersList.name = action.payload.name;
      state.ordersList.phone = action.payload.phone;
      state.ordersList.email = action.payload.email;
    },
    resetPostOrderStatus: (state) => {
      state.postOrderStatus = Status.NO_STATUS;
      state.ordersList = {
        name: "John Doe",
        phone: "1234567890",
        email: "johndoe@example.com",
        products: [],
      };
    },
    addProductToBasket: (state, action) => {
      const product = action.payload;

      const exists = state.ordersList.products.find((p) => p.id === product.id);

      if (!exists) {
        state.ordersList.products.push({ ...product });
      }
    },
    delProductFromBasket: (state, action) => {
      state.ordersList.products = [
        ...state.ordersList.products.filter(
          (item) => String(item.id) !== String(action.payload),
        ),
      ];
    },
    plusProductInBasket: (state, action) => {
      const productId = action.payload;

      const existingProduct = state.ordersList.products.find(
        (item) => item.id === productId,
      );

      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.ordersList.products.push({
          id: productId,
          count: 1,
        });
      }
    },
    minusProductInBasket: (state, action) => {
      const id = action.payload;

      const product = state.ordersList.products.find((p) => p.id === id);

      if (!product) return;

      product.count -= 1;

      if (product.count <= 0) {
        state.ordersList.products = state.ordersList.products.filter(
          (p) => p.id !== id,
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.ordersListStatus = Status.LOADING;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.ordersListStatus = Status.DONE;
        state.getOrderList = action.payload;
      })
      .addCase(getAllOrders.rejected, (state) => {
        state.ordersListStatus = Status.ERROR;
      });
    builder
      .addCase(postOrder.pending, (state) => {
        state.postOrderStatus = Status.LOADING;
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.postOrderStatus = Status.DONE;
        state.orderStatusState = action.payload;
      })
      .addCase(postOrder.rejected, (state) => {
        state.postOrderStatus = Status.ERROR;
      });
  },
});

export const {
  setUsersData,
  addProductToBasket,
  delProductFromBasket,
  minusProductInBasket,
  plusProductInBasket,
  resetPostOrderStatus,
} = basketSlice.actions;
export default basketSlice.reducer;
