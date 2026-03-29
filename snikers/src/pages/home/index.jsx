import { useContext } from "react";
import ProductsContext from "../../context";
import { CardMedia, Typography, Box, Divider, Grid } from "@mui/material";
import Banner from "../../assets/Banner.png";
import ProductCard from "../../components/productCard";

function Home() {
  const { products, addToCart, cartData } = useContext(ProductsContext);

  return (
    <Box
      sx={{
        margin: "0 auto",
        maxWidth: "1420px",
        width: "100%",
      }}
    >
      <CardMedia
        component="img"
        image={Banner}
        alt="Banner"
        sx={{
          width: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      <Typography
        variant="h2"
        sx={{
          fontFamily: "Montserrat",
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "44px",
          padding: "72px 0",
        }}
      >
        Товары
      </Typography>

      <Divider sx={{ marginBottom: "45px" }} />

      <Grid container spacing={6}>
        {products.map((item) => {
          const isInCart = cartData.some((cartItem) => cartItem.id === item.id);
          return (
            <Grid size={4} key={item.id}>
              <ProductCard
                item={item}
                addToCart={addToCart}
                isInCart={isInCart}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Home;
