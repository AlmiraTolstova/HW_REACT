import { Box, Card, Typography, CardMedia, CardContent } from "@mui/material";
import { Flex } from "antd";
import { useNavigate } from "react-router-dom";
import BtnCard from "../btnCard";
import { addProductToBasket } from "../../redux/slices/basketSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductCard({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/productcard/${item.id}`);
  };
  const { productsList, categories } = useSelector((state) => state.homeSlice);
  const { ordersList } = useSelector((state) => state.basketSlice);

  const orderedProduct =
    ordersList.products.find((prod) => String(prod.id) === String(item.id)) !==
    undefined
      ? true
      : false;

  const handleAddToBasketClick = (id) => {
    dispatch(
      addProductToBasket({
        id,
        count: 1,
      }),
    );
  };
  return (
    <Box key={item.id}>
      <Card
        sx={{ width: "316px", mx: "auto" }}
        onClick={() => {
          handleClick(item);
        }}
        sx={{
          width: "316px",
          mx: "auto",
          position: "relative",

          "&:hover .add-btn": {
            opacity: 1,
            transform: "translateY(0)",
            pointerEvents: "auto",
          },
        }}
      >
        <Box
        // sx={{
        //   position: "relative",
        //   "&:hover .add-btn": {
        //     opacity: 1,
        //     transform: "translateY(0)",
        //   },
        // }}
        >
          <CardMedia
            sx={{ height: "284px" }}
            image={"http://localhost:3333" + item.image}
            title={item.title}
          />
          <BtnCard
            className="add-btn"
            onClick={(e) => {
              e.stopPropagation(); // защита
              handleAddToBasketClick(item.id);
            }}
            sx={{
              position: "absolute",
              bottom: "16px",
              left: "0%",
              transform: "translate(-50%, 20px)",
              opacity: 0,

              pointerEvents: "none", // ❗ ключевой фикс

              transition: "all 0.25s ease",
              width: "90%",
              zIndex: 2,
            }}
            disabled={orderedProduct}
          >
            {orderedProduct ? "Added" : "Add to cart"}
          </BtnCard>
          <Box sx={{ height: "1px", backgroundColor: "#DDDDDD" }} />

          {item.discount_percentage && (
            <Box
              sx={{
                position: "absolute",
                top: "16px",
                right: "16px",
                // width: "60px",
                // height: "40px",
                p: "4px 8px 4px 8px",
                backgroundColor: "#0D50FF",
                borderRadius: "6px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontSize: "20px",
                lineHeight: "130%",
                letterSpacing: "0.03em",
              }}
            >
              -{item.discount_percentage}%
            </Box>
          )}
        </Box>

        <CardContent sx={{ p: "20px 32px 32px " }}>
          <Typography
            sx={{
              maxWidth: "252px",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "130%",
              color: "#282828",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            variant="h6"
          >
            {item.title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-end", mt: 2 }}>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "40px",
                lineHeight: "110%",
                color: "#282828",
                pr: 2,
              }}
            >
              {item.discont_price !== null ? item.discont_price : item.price}$
            </Typography>
            {item.discont_price ? (
              <Typography
                sx={{
                  textDecoration: "line-through",
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "130%",
                  color: "#8B8B8B",
                }}
              >
                {item.price}$
              </Typography>
            ) : (
              <Box />
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductCard;
