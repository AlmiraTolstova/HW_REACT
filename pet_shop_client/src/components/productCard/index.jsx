import { Box, Card, Typography, CardMedia, CardContent } from "@mui/material";
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
        onClick={() => {
          handleClick(item);
        }}
        sx={{
          width: "19.75rem",
          mx: "auto",
          position: "relative",

          "&:hover .add-btn": {
            opacity: 1,
            transform: "translateY(0)",
            pointerEvents: "auto",
          },
        }}
      >
        <CardMedia
          sx={{ height: "17.75rem" }}
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
            bottom: "1rem",
            left: "2%",
            transform: "translate(-50%, 20px)",
            opacity: 0,
            pointerEvents: "none", // ❗ ключевой фикс
            transition: "all 0.25s ease",
            width: "95%",
            zIndex: 2,
            fontSize: "16px",
          }}
          disabled={orderedProduct}
        >
          {orderedProduct ? "Added" : "Add to cart"}
        </BtnCard>
        <Box sx={{ height: "1px", backgroundColor: "#DDDDDD" }} />

        {/* {item.discount_percentage && */}
        {item.discount_percentage != null && (
          <Box
            sx={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
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

        <CardContent sx={{ p: "20px 32px 32px " }}>
          <Typography
            sx={{
              maxWidth: "15.75rem",
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
                fontSize: "2.5rem",
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
                  fontSize: "1.25rem",
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
