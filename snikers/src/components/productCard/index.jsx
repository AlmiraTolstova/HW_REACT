import { Card, CardMedia, Typography, Box } from "@mui/material";
import { LightPlusIcon, DarkPlusIcon } from "../icons";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  maxWidth: "386px",
  borderRadius: "42px",
  boxShadow: "none",
  border: "2px solid #D9D9D9",
  position: "relative",
  padding: "48px 40px 40px 40px",
});

const ProductImage = styled(CardMedia)({
  width: "100%",
  objectFit: "contain",
});

const ProductTitle = styled(Typography)({
  fontFamily: "Montserrat",
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "29px",
  marginBottom: "42px",
});

const PriceLabel = styled(Typography)({
  fontFamily: "Montserrat",
  fontWeight: 500,
  fontSize: "14px",
  textTransform: "uppercase",
  color: "#666666",
});

const PriceValue = styled(Typography)({
  fontFamily: "Inter",
  fontWeight: 700,
  fontSize: "24px",
});

const PlusButton = styled(Box)({
  position: "absolute",
  right: 30,
  bottom: 30,
  cursor: "pointer",
});

function ProductCard({ item, addToCart, isInCart }) {
  return (
    <StyledCard>
      <ProductImage component="img" image={item.image} alt={item.name} />

      <ProductTitle>{item.name}</ProductTitle>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <PriceLabel>Цена:</PriceLabel>
          <PriceValue>{item.price} €</PriceValue>
        </Box>

        <PlusButton onClick={() => !isInCart && addToCart(item)}>
          {isInCart ? (
            <DarkPlusIcon sx={{ fontSize: 40 }} />
          ) : (
            <LightPlusIcon sx={{ fontSize: 40 }} />
          )}
        </PlusButton>
      </Box>
    </StyledCard>
  );
}

export default ProductCard;
