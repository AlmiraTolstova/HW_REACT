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
  Grid,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BtnCard from "../../components/btnCard";
import { getProducts } from "../../redux/slices/homeSlice";
import { addProductToBasket } from "../../redux/slices/basketSlice";
import BtnCounterControls from "../../components/btnCounterControls";

function ProductCardPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const { productsList, categories } = useSelector((state) => state.homeSlice);
  const { ordersList } = useSelector((state) => state.basketSlice);
  useEffect(() => {
    if (productsList.length === 0) {
      dispatch(getProducts());
    }
  }, [id, productsList, dispatch]);

  const selectedProduct = productsList.find(
    (item) => String(item.id) === String(id),
  );
  const selectedCategory = categories.find(
    (item) => String(item.id) === String(selectedProduct.categoryId),
  );

  const localBreadCrumps = [
    {
      label: "Main page",
      path: "/",
    },
    {
      label: "Categories",
      path: "/categoriespage",
    },
    {
      label: selectedCategory.title,
      path: `/allproductspage/${selectedCategory.id}`,
    },
    {
      label: selectedProduct.title,
      path: ``,
    },
  ];

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

  const orderedProduct =
    ordersList.products.find(
      (item) => String(item.id) === String(selectedProduct.id),
    ) !== undefined
      ? true
      : false;

  const maxLength = 400;

  const shortDescription = selectedProduct?.description
    ? selectedProduct.description.length > maxLength
      ? selectedProduct.description.slice(0, maxLength) + "..."
      : selectedProduct.description
    : "";

  if (!selectedProduct) return <div>Loading...</div>;
  return (
    <Box sx={{ maxWidth: "85rem", margin: "0 auto", border: "1px solid red" }}>
      <BreadCrumbs crumbs={localBreadCrumps}></BreadCrumbs>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
      >
        <Grid size={7} sx={{ border: "2px solid blue" }}>
          <Box
            sx={{
              width: "548px",
              height: "572px",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={"http://localhost:3333" + selectedProduct.image}
              alt={selectedProduct.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid size={5} sx={{ border: "2px solid blue" }}>
          <CardContent>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "110%",
                letterSpacing: "0.03em",
                color: "#282828",
                pb: "32px",
              }}
              variant="h4"
            >
              {selectedProduct.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "flex-end", pb: "32px" }}>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "64px",
                  lineHeight: "110%",
                  color: "#282828",
                  pr: "32px",
                }}
              >
                {selectedProduct.price}$
              </Typography>
              {selectedProduct.discont_price !== null ? (
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "40px",
                    lineHeight: "130%",
                    textDecorationLine: "line-through",
                    color: "#8B8B8B",
                    pr: 2,
                  }}
                >
                  {selectedProduct.discont_price}$
                </Typography>
              ) : (
                <Box></Box>
              )}
              {selectedProduct.discount_percentage ? (
                <Typography
                  sx={{
                    alignSelf: "flex-start",
                    backgroundColor: "#0D50FF",
                    p: "4px 8px 4px 8px",
                    borderRadius: "6px",
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "130%",
                    letterSpacing: "0.03em",
                    color: "#FFFFFF",
                  }}
                >
                  -{selectedProduct.discount_percentage}%
                </Typography>
              ) : (
                <Box></Box>
              )}
            </Box>
            <Box sx={{ display: "flex" }}>
              {/* <Button
                onClick={handleMinusClick}
                variant="outline"
                sx={{ width: "50px", border: "1px solid #8B8B8B" }}
                disabled={orderedProduct}
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
                disabled={orderedProduct}
              >
                +
              </Button> */}
              <BtnCounterControls
                count={count}
                onMinus={handleMinusClick}
                onPlus={handlePlusClick}
                disabled={orderedProduct}
              />
              <BtnCard
                sx={{ marginLeft: "30px" }}
                onClick={handleAddToBasketClick}
                disabled={orderedProduct}
              >
                {orderedProduct ? "Added" : "Add to cart"}
              </BtnCard>
            </Box>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "130%",
                color: "#282828",
                mt: 4,
                mb: 2,
              }}
              variant="h5"
            >
              Description
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "130%",
                color: "#282828",
              }}
            >
              {isExpanded ? selectedProduct.description : shortDescription}
            </Typography>
            {selectedProduct.description.length > maxLength && (
              <Button
                onClick={() => setIsExpanded((prev) => !prev)}
                sx={{
                  mt: 1,
                  textTransform: "none",
                  textDecoration: "underline",
                  color: "#282828",
                  fontWeight: 500,
                  fontSize: "16px",
                  p: 0,
                }}
              >
                {isExpanded ? "Hide" : "Read more"}
              </Button>
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductCardPage;
