import { Typography } from "@mui/material";
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
    <div>
      <BreadCrumbs crumbs={localBreadCrumps}></BreadCrumbs>
      <Typography variant="h2"> Categories</Typography>
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
    </div>
  );
}

export default CategoriesPage;
