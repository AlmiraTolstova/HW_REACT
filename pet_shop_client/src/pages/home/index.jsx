import { useEffect } from "react";
import CategoriesSlider from "../../components/categoriesSlider";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../../redux/slices/homeSlice";
import DiscountForm from "../../components/discountForm";
import SalesList from "../../components/salesList";
import MainBanner from "../../components/mainBanner";
import { Box } from "@mui/material";

function Home() {
  const dispatch = useDispatch();

  const { productsSalesShortList } = useSelector((state) => state.homeSlice);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Box>
      <MainBanner></MainBanner>
      <CategoriesSlider></CategoriesSlider>
      <DiscountForm></DiscountForm>
      <SalesList saleslist={productsSalesShortList}></SalesList>
    </Box>
  );
}

export default Home;
