import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../api/api";
import { Status } from "../../utils/Status";

//-------------получение всех категорий товаров----------------//
export const getCategories = createAsyncThunk(
  "home/get_categories",
  async () => {
    const response = await axios.get(API.Home.getCaterories(), {});
    return response.data;
  },
);

//-------------получение всех товаров----------------//
export const getProducts = createAsyncThunk("home/get_products", async () => {
  const response = await axios.get(API.Home.getProducts(), {});
  return response.data;
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    categories: [],
    categoriesStatus: Status.NO_STATUS,
    categoriesErrorMessage: "",
    discontFormData: { userName: "", phone: "", email: "" },
    productsList: [],
    productsListStatus: Status.NO_STATUS,
    productsListErrorMessage: "",
  },
  reducers: {
    setDiscontFormData: (state, action) => {
      state.discontFormData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.categoriesStatus = Status.LOADING;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categoriesStatus = Status.DONE;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.categoriesStatus = Status.ERROR;
        state.categoriesErrorMessage = action.payload.message;
      });
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsListStatus = Status.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsListStatus = Status.DONE;
        state.productsList = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsListStatus = Status.ERROR;
        state.productsListErrorMessage = action.payload.message;
      });
  },
});

export const { resetState, logout } = homeSlice.actions;
export default homeSlice.reducer;
