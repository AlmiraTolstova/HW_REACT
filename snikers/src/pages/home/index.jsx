import { useContext } from "react";
import ProductsContext from "../../context";
import { Card, CardMedia, Typography, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Home() {
  const { products, addToCart } = useContext(ProductsContext);

  return (
    <div>
      <h2>Товары</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "131px",
        }}
      >
        {products.map((item) => (
          <div key={item.id}>
            {/* <p>{item.name}</p>
          <button onClick={() => addToCart(item)}>Добавить в корзину</button> */}

            <Card
              sx={{
                width: 386,
                borderRadius: "30px",
                p: 4,
                boxShadow: "none",
                border: "2px solid #E5E5E5",
                position: "relative",
              }}
            >
              {/* Изображение */}
              <CardMedia
                component="img"
                image={item.image}
                alt="Nike Air Zoom Pegasus"
                sx={{
                  width: "100%",
                  objectFit: "contain",
                  mb: 3,
                }}
              />

              {/* Название */}
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 32,
                  fontWeight: 500,
                  mb: 4,
                }}
              >
                {item.name}
              </Typography>

              {/* Цена */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#9D9D9E",
                    fontSize: 16,
                  }}
                >
                  Цена:
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 40,
                    fontWeight: 700,
                  }}
                >
                  {item.price}€
                </Typography>
              </Box>

              {/* Кнопка + */}
              <IconButton
                sx={{
                  position: "absolute",
                  right: 30,
                  bottom: 30,
                  width: 70,
                  height: 70,
                  backgroundColor: "#0A0F1F",
                  color: "white",
                  border: "6px solid #E5E5E5",
                  "&:hover": {
                    backgroundColor: "#111",
                  },
                }}
                onClick={() => addToCart(item)}
              >
                <AddIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Card>
          </div>
        ))}
      </Box>
    </div>
  );
}

export default Home;
