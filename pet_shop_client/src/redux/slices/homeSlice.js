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
  const response = await axios.post(API.Home.getDiscount(), {});
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
    productsSalesList: [],
    productsSalesShortList: [],
    productsListStatus: Status.NO_STATUS,
    productsListErrorMessage: "",
    discountStatus: Status.NO_STATUS,
    discountErrorMessage: "",
    discount: "",
    productsLocalList: [],
    filterPriceFrom: null,
    filterPriceTo: null,
    filterShowDiscountedItems: false,
    sortedType: "default",
  },
  reducers: {
    setDiscontFormData: (state, action) => {
      state.discontFormData = action.payload;
    },
    resetDiscountStatus: (state) => {
      state.discountStatus = Status.NO_STATUS;
    },
    setProductsLocalList: (state, action) => {
      let filteredProductsList = action.payload;
      if (state.filterShowDiscountedItems) {
        filteredProductsList = action.payload.filter(
          (item) => item.discont_price !== null,
        );
      }
      // 2. Фильтр по цене FROM
      if (state.filterPriceFrom) {
        filteredProductsList = filteredProductsList.filter((item) => {
          const price = item.discont_price ?? item.price;
          return price >= Number(state.filterPriceFrom);
        });
      }

      // 3. Фильтр по цене TO
      if (state.filterPriceTo) {
        filteredProductsList = filteredProductsList.filter((item) => {
          const price = item.discont_price ?? item.price;
          return price <= Number(state.filterPriceTo);
        });
      }

      // 4. СОРТИРОВКА
      if (state.sortedType === "low") {
        filteredProductsList = [...filteredProductsList].sort((a, b) => {
          const priceA = a.discont_price ?? a.price;
          const priceB = b.discont_price ?? b.price;
          return priceA - priceB; // по возрастанию
        });
      }

      if (state.sortedType === "high") {
        filteredProductsList = [...filteredProductsList].sort((a, b) => {
          const priceA = a.discont_price ?? a.price;
          const priceB = b.discont_price ?? b.price;
          return priceB - priceA; // по убыванию
        });
      }

      // default → без сортировки
      state.productsLocalList = filteredProductsList;
    },
    setFilterPriceFrom: (state, action) => {
      state.filterPriceFrom = action.payload;
    },
    setFilterPriceTo: (state, action) => {
      state.filterPriceTo = action.payload;
    },
    setFilterShowDiscountItems: (state, action) => {
      state.filterShowDiscountedItems = action.payload;
    },
    setSortedType: (state, action) => {
      state.sortedType = action.payload;
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
        let salesProducts = [];
        salesProducts = action.payload.filter(
          (item) => item.discont_price !== null,
        );
        salesProducts.map((product) => {
          product["discount_percentage"] = Math.round(
            ((product["price"] - product["discont_price"]) / product["price"]) *
              100,
          );
        });
        state.productsSalesList = salesProducts;
        state.productsSalesShortList = [...salesProducts]
          .sort((a, b) => b["discount_percentage"] - a["discount_percentage"])
          .slice(0, 4);
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
        console.log(state.discountStatus);
      })
      .addCase(getDiscount.rejected, (state, action) => {
        state.discountStatus = Status.ERROR;
        state.discountErrorMessage = action.payload.message;
      });
  },
});

export const {
  resetState,
  logout,
  resetDiscountStatus,
  setProductsLocalList,
  setFilterPriceFrom,
  setFilterPriceTo,
  setFilterShowDiscountItems,
  setSortedType,
} = homeSlice.actions;
export default homeSlice.reducer;
