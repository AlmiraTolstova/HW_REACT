import { Box, Typography } from "@mui/material";
import BreadCrumbs from "../../components/breadcrumbs";
import CategoriesList from "../../components/categoriesList";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/slices/homeSlice";
import { useEffect } from "react";
import { Spin } from "antd";
import { Status } from "../../utils/Status";
import { LoadingOutlined } from "@ant-design/icons";
import GridCardsContainer from "../../components/gridCardsContainer";
import CategoryCard from "../../components/categoryСard";

const localBreadCrumps = [
  {
    label: "Main page",
    path: "/",
  },
  {
    label: "Categories",
    path: "",
  },
];

function CategoriesPage() {
  const dispatch = useDispatch();

  const { categories, categoriesStatus } = useSelector(
    (state) => state.homeSlice,
  );
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Box sx={{ maxWidth: "85rem", margin: "0 auto" }}>
      <BreadCrumbs crumbs={localBreadCrumps}></BreadCrumbs>
      <Typography
        variant="h2"
        sx={{
          pb: 5,
          pt: 5,
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "64px",
          lineHeight: "110%",
          color: "#282828",
        }}
      >
        Categories
      </Typography>
      <Spin
        indicator={<LoadingOutlined spin />}
        size="large"
        spinning={categoriesStatus === Status.LOADING ? true : false}
      >
        {/* <CategoriesList categorieslist={categories}></CategoriesList> */}
        <GridCardsContainer
          objectsList={categories}
          CardComponent={CategoryCard}
        ></GridCardsContainer>
      </Spin>
    </Box>
  );
}

export default CategoriesPage;
