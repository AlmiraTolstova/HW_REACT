import { useContext } from "react";
import ProductsContext from "../../context";
import { Card, CardMedia, Typography, Box, Divider } from "@mui/material";
import Banner from "../../assets/Banner.png";
import { LightPlusIcon, DarkPlusIcon } from "../../components/icons";

function Home() {
  const { products, addToCart, cartData } = useContext(ProductsContext);

  return (
    <Box
      sx={{
        margin: "0 auto",
        maxWidth: "1420px",
        width: "100%",
        border: "1px solid red",
      }}
    >
      <CardMedia
        component="img"
        image={Banner}
        alt="Banner"
        sx={{
          width: "100%",
          objectFit: "cover",
          border: "1px solid red",
          display: "block",
        }}
      />

      <Typography
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

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "131px",
        }}
      >
        {products.map((item) => {
          const isInCart = cartData.some((cartItem) => cartItem.id === item.id);
          console.log(isInCart);
          return (
            <Card
              key={item.id}
              sx={{
                maxWidth: "386px",
                borderRadius: "42px",
                boxShadow: "none",
                border: "2px solid #D9D9D9",
                position: "relative",
                padding: "48px 40px 40px 40px",
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{
                  width: "100%",
                  objectFit: "contain",
                }}
              />

              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "29px",
                  mb: "42px",
                }}
              >
                {item.name}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 500,
                      fontSize: "14px",
                      textTransform: "uppercase",
                      color: "#666666",
                    }}
                  >
                    Цена:
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 700,
                      fontSize: "24px",
                    }}
                  >
                    {item.price} €
                  </Typography>
                </Box>

                {isInCart ? (
                  <DarkPlusIcon
                    sx={{
                      fontSize: 40,
                      cursor: "pointer",
                      position: "absolute",
                      right: 30,
                      bottom: 30,
                    }}
                  />
                ) : (
                  <LightPlusIcon
                    sx={{
                      fontSize: 40,
                      cursor: "pointer",
                      position: "absolute",
                      right: 30,
                      bottom: 30,
                    }}
                    onClick={() => addToCart(item)}
                  />
                )}
              </Box>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}

export default Home;
