import { useEffect } from "react";
import CategoriesSlider from "../../components/categoriesSlider";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/slices/homeSlice";
import DiscountForm from "../../components/discountForm";

function Home() {
  const dispatch = useDispatch();

  const { categories, categoriesStatus } = useSelector(
    (state) => state.homeSlice,
  );
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      Home
      <CategoriesSlider></CategoriesSlider>
      <DiscountForm></DiscountForm>
    </div>
  );
}

export default Home;
