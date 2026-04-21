import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import BreadCrumbs from "../../components/breadcrumbs";
import CategoriesList from "../../components/categoriesList";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getProducts,
  setProductsLocalList,
} from "../../redux/slices/homeSlice";
import { useEffect } from "react";
import { Spin } from "antd";
import { Status } from "../../utils/Status";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import ProductsList from "../../components/productsList";
import ProductSortingFilters from "../../components/productSortingFilters";

let localBreadCrumpsCategories = [];

const localBreadCrumpsAllProducts = [
  {
    label: "Main page",
    path: "/",
  },
  {
    label: "All products",
    path: "/allproductspage/allproducts",
  },
];

const localBreadCrumpsAllSales = [
  {
    label: "Main page",
    path: "/",
  },
  {
    label: "All sales",
    path: "/allproductspage/allsales",
  },
];

function AllProductsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [localBreadCrumps, setLocalBreadCrumps] = useState([]);
  const { productsList, categories, productsLocalList, productsSalesList } =
    useSelector((state) => state.homeSlice);
  useEffect(() => {
    if (productsList.length === 0) {
      dispatch(getProducts());
      dispatch(getCategories());
    }
    switch (id) {
      case "allproducts": {
        dispatch(setProductsLocalList(productsList));
        setLocalBreadCrumps(localBreadCrumpsAllProducts);
        break;
      }

      case "allsales": {
        dispatch(setProductsLocalList(productsSalesList));
        setLocalBreadCrumps(localBreadCrumpsAllSales);
        break;
      }
      default: {
        const selectedCategory = [...categories].find(
          (cat) => String(cat.id) === String(id),
        );
        localBreadCrumpsCategories = [
          {
            label: "Main page",
            path: "/",
          },
          {
            label: "Categories",
            path: "/categoriespage",
          },
        ];

        localBreadCrumpsCategories.push({
          label: selectedCategory.title,
          path: `/categoriespage/${selectedCategory.id}`,
        });
        dispatch(
          setProductsLocalList(
            [...productsList].filter((item) => {
              return String(item.categoryId) === id;
            }),
          ),
        );
        setLocalBreadCrumps(localBreadCrumpsCategories);
      }
    }
  }, [dispatch, id, productsList, productsSalesList, categories]);

  return (
    <Box>
      <BreadCrumbs crumbs={localBreadCrumps}></BreadCrumbs>
      <ProductSortingFilters></ProductSortingFilters>
      <Button
        onClick={() => {
          console.log(productsLocalList);
        }}
      >
        reducer
      </Button>
      All Products Page Category ID: {id}
      <ProductsList
        productslist={productsLocalList}
        type_id={id}
      ></ProductsList>
    </Box>
  );
}

export default AllProductsPage;
