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
    <div>
      <h2>Корзина</h2>
      <Box
        sx={{
          display: "flex",
          //   margin: "0 auto",
          maxWidth: "1420px",
          width: "100%",
        }}
      >
        <Box
        // sx={{
        //   display: "flex",
        //   flexDirection: "row",
        //   flexWrap: "wrap",
        //   gap: "131px",
        // }}
        >
          {cartData.map((item) => (
            <Box key={item.id}>
              <Card
                sx={{
                  display: "flex",
                  width: 903,
                  borderRadius: "10px",
                  p: 4,
                  boxShadow: "none",
                  //   position: "relative",
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
                  sx={{ width: 76, height: 76 }}
                >
                  {/* <DeleteForeverOutlinedIcon sx={{ fontSize: 32 }} /> */}
                </TrashIcon>
              </Card>
            </Box>
          ))}
        </Box>

        <Card>
          <Typography>Итого</Typography>
          {cartData.map((item) => {
            return (
              <Box>
                <Typography>{item.name} </Typography>
              </Box>
            );
          })}
          <Divider></Divider>
          <Typography>Цена:</Typography>
          <Box sx={{ display: "flex" }}>
            {cartData.reduce((acc, curValue) => {
              return acc + Number(curValue.price);
            }, 0)}
            <Typography>€</Typography>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default Basket;
