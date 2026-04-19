import { useEffect } from "react";
import CategoriesSlider from "../../components/categoriesSlider";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/slices/homeSlice";

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
    </div>
  );
}

export default Home;
