import { useEffect } from "react";
import CategoriesSlider from "../../components/categoriesSlider";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../../redux/slices/homeSlice";
import DiscountForm from "../../components/discountForm";
import { Button } from "@mui/material";
import SalesList from "../../components/salesList";

function Home() {
  const dispatch = useDispatch();

  const {
    categories,
    categoriesStatus,
    productsList,
    productsListStatus,
    productsSalesList,
    productsSalesShortList,
  } = useSelector((state) => state.homeSlice);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      Home
      <Button onClick={() => console.log(productsSalesShortList)}>
        reducer
      </Button>
      <CategoriesSlider></CategoriesSlider>
      <DiscountForm></DiscountForm>
      <SalesList saleslist={productsSalesShortList}></SalesList>
    </div>
  );
}

export default Home;
