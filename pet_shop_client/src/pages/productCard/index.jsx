import BreadCrumbs from "../../components/breadcrumbs";
import CategoriesList from "../../components/categoriesList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spin } from "antd";
import { Status } from "../../utils/Status";
import { LoadingOutlined } from "@ant-design/icons";
import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
  Button,
  Input,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BtnCard from "../../components/btnCard";
import { getProducts } from "../../redux/slices/homeSlice";
import { addProductToBasket } from "../../redux/slices/basketSlice";

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

function ProductCard() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const { productsList } = useSelector((state) => state.homeSlice);
  const { ordersList } = useSelector((state) => state.basketSlice);
  useEffect(() => {
    if (productsList.length === 0) {
      dispatch(getProducts());
    }
  }, [id, productsList, dispatch]);

  const selectedProduct = productsList.find(
    (item) => String(item.id) === String(id),
  );
  const handlePlusClick = () => {
    setCount(count + 1);
  };
  const handleMinusClick = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };

  const handleAddToBasketClick = () => {
    const item = {
      id: id,
      count: count,
    };
    dispatch(addProductToBasket(item));
  };

  if (!selectedProduct) return <div>Loading...</div>;
  return (
    <div>
      <Button onClick={() => console.log(ordersList)}>reducer</Button>
      <BreadCrumbs crumbs={localBreadCrumps}></BreadCrumbs>
      <Typography>ProductCard</Typography>
      <Card>
        <CardMedia
          sx={{ height: "400px", width: "400px" }}
          image={"http://localhost:3333" + selectedProduct.image}
          title={selectedProduct.title}
        />
        <CardContent>
          <Typography variant="h5"> Categories</Typography>
          <Typography variant="h5"> {selectedProduct.title}</Typography>
          <Typography variant="h5"> {selectedProduct.price}$</Typography>
          {selectedProduct.discont_price !== null ? (
            <Typography>{selectedProduct.discont_price}$</Typography>
          ) : (
            <Box></Box>
          )}
          {selectedProduct.discount_percentage ? (
            <Typography sx={{ backgroundColor: "blue", width: "50px" }}>
              -{selectedProduct.discount_percentage}%
            </Typography>
          ) : (
            <Box></Box>
          )}
          <Box sx={{ display: "flex" }}>
            <Button
              onClick={handleMinusClick}
              variant="contained"
              sx={{ width: "50px" }}
            >
              -
            </Button>
            <Typography sx={{ width: "50px", backgroundColor: "#9a8585" }}>
              {count}
            </Typography>
            <Button
              onClick={handlePlusClick}
              variant="contained"
              sx={{ width: "50px" }}
            >
              +
            </Button>
            <BtnCard onClick={handleAddToBasketClick}>Add to cart</BtnCard>
          </Box>
          <Typography variant="h5">
            Description {selectedProduct.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;
