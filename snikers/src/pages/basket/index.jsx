import { useContext } from "react";
import ProductsContext from "../../context";
import Button from "@mui/material/Button";
import { Card, CardMedia, Typography, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Divider } from "@mui/material";
import { TrashIcon } from "../../components/icons";

function Basket() {
  const { cartData, deleteFromCart } = useContext(ProductsContext);

  return (
    <Box
      sx={{
        margin: "0 auto",
        maxWidth: "1420px",
        width: "100%",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: 3.8,
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "44px",
        }}
      >
        Корзина
      </Typography>
      <Box
        sx={{
          display: "flex",
          maxWidth: "1420px",
          width: "100%",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <Box>
          {cartData.map((item) => (
            <Box key={item.id}>
              <Card
                sx={{
                  display: "flex",
                  maxWidth: 903,
                  borderRadius: "10px",
                  p: 4,
                  boxShadow: "none",
                  backgroundColor: "#FAFAFA",
                  mb: 6,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* Изображение */}
                <CardMedia
                  component="img"
                  image={item.image}
                  alt="Nike Air Zoom Pegasus"
                  sx={{
                    maxWidth: "197px",
                    objectFit: "contain",
                    // mb: 3,
                  }}
                />
                <Divider
                  orientation="vertical"
                  sx={{
                    border: "1px solid rgba(0, 0, 0, 0.5)",
                    height: 98,
                    ml: 4,
                    mr: 4,
                  }}
                ></Divider>
                {/* Название */}
                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 24,
                    fontWeight: 400,
                    fontStyle: "normal",
                    maxWidth: 288,
                    lineHeight: "29px",
                  }}
                >
                  {item.name}
                </Typography>

                {/* Цена */}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#666666",
                      fontSize: 14,
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "17px",
                      textTransform: "uppercase",
                    }}
                  >
                    Цена:
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: 24,
                      fontWeight: 700,
                      fontStyle: "normal",
                      lineHeight: "29px",
                    }}
                  >
                    {item.price} €
                  </Typography>
                </Box>

                {/* Кнопка + */}
                <TrashIcon
                  onClick={() => deleteFromCart(item.id)}
                  sx={{
                    width: 76,
                    height: 76,
                    ml: 2,
                    color: "#F3F3F3",
                    cursor: "pointer",

                    "&:hover": {
                      color: "#e9e7e7",
                    },

                    "&:active": {
                      color: "#bbb8b8",
                    },
                  }}
                >
                  {/* <DeleteForeverOutlinedIcon sx={{ fontSize: 32 }} /> */}
                </TrashIcon>
              </Card>
            </Box>
          ))}
        </Box>

        <Card
          sx={{
            boxShadow: "none",
            backgroundColor: "#FAFAFA",
            maxWidth: "388px",
            p: "26px",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "36px",
              lineHeight: "44px",
              justifySelf: "center",
              mb: 4,
            }}
          >
            Итого
          </Typography>
          {cartData.map((item) => {
            return (
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "24px",
                    lineHeight: "24px",
                    mb: 2,
                  }}
                >
                  {item.name}{" "}
                </Typography>
              </Box>
            );
          })}
          <Divider></Divider>
          <Typography
            sx={{
              mt: 2,
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "17px",
              textTransform: "uppercase",
              color: "#2D2D2D",
            }}
          >
            Цена:
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "29px",
              mt: "12px",
            }}
          >
            {cartData.reduce((acc, curValue) => {
              return acc + Number(curValue.price);
            }, 0)}
            €
          </Typography>
        </Card>
      </Box>
    </Box>
  );
}

export default Basket;
