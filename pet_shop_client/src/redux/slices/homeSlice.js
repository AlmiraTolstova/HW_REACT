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

//-------------получение скидки----------------------//
export const getDiscount = createAsyncThunk("home/get_discount", async () => {
  const response = await axios.get(API.Home.getDiscount(), {});
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
    discountStatus: Status.NO_STATUS,
    discountErrorMessage: "",
    discount: "",
  },
  reducers: {
    setDiscontFormData: (state, action) => {
      state.discontFormData = action.payload;
    },
    resetDiscount: (state) => {
      state.discount = "";
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

    builder
      .addCase(getDiscount.pending, (state) => {
        state.discountStatus = Status.LOADING;
      })
      .addCase(getDiscount.fulfilled, (state, action) => {
        state.discountStatus = Status.DONE;
        state.discount = action.payload;
        console.log(action.payload);
      })
      .addCase(getDiscount.rejected, (state, action) => {
        state.discountStatus = Status.ERROR;
        state.discountErrorMessage = action.payload.message;
      });
  },
});

export const { resetState, logout } = homeSlice.actions;
export default homeSlice.reducer;
