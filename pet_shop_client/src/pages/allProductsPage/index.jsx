import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import BreadCrumbs from "../../components/breadcrumbs";
import CategoriesList from "../../components/categoriesList";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  setProductsLocalList,
} from "../../redux/slices/homeSlice";
import { useEffect } from "react";
import { Spin } from "antd";
import { Status } from "../../utils/Status";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import ProductsList from "../../components/productsList";

const localBreadCrumps = [
  {
    label: "Main page",
    path: "/",
  },
  {
    label: "Categories",
    path: "/categoriespage",
  },
];

function AllProductsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { productsList, productsListStatus, productsLocalList } = useSelector(
    (state) => state.homeSlice,
  );
  useEffect(() => {
    if (id === "-1") {
      dispatch(setProductsLocalList(productsList));
    } else {
      dispatch(
        setProductsLocalList(
          [...productsList].filter((item) => {
            return String(item.categoryId) === id;
          }),
        ),
      );
    }
  }, [dispatch, id, productsList]);

  return (
    <Box>
      <Button
        onClick={() => {
          console.log(productsLocalList);
        }}
      >
        reducer
      </Button>
      All Products Page Category ID: {id}
      <ProductsList productslist={productsLocalList}></ProductsList>
    </Box>
  );
}

export default AllProductsPage;
