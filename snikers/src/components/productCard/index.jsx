import { Card, CardMedia, Typography, Box } from "@mui/material";
import { LightPlusIcon, DarkPlusIcon } from "../icons";
import { styled } from "@mui/system";
import { useState } from "react";

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

function ProductCard({ item, addToCart }) {
  return (
    <StyledCard sx={{ height: 393 }}>
      <ProductImage
        sx={{ height: 127, objectFit: "cover" }}
        component="img"
        image={item.image}
        alt={item.name}
      />

      <ProductTitle>{item.name}</ProductTitle>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <PriceLabel>Цена:</PriceLabel>
          <PriceValue>{item.price} €</PriceValue>
        </Box>

        <LightPlusIcon
          sx={{
            width: 48,
            height: 48,
            color: "#F4F4F4",

            cursor: "pointer",

            "&:hover .icon-bg": {
              fill: "black",
            },

            "&:hover .icon-line": {
              stroke: "white",
            },
            "& .icon-bg, & .icon-line": {
              transition: "0.5s",
            },
          }}
          onClick={() => addToCart(item)}
        ></LightPlusIcon>
      </Box>
    </StyledCard>
  );
}

export default ProductCard;
