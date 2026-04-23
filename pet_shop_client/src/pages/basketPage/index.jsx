import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  TextField,
  Grid,
  Divider,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  minusProductInBasket,
  plusProductInBasket,
  delProductFromBasket,
  postOrder,
  setUsersData,
} from "../../redux/slices/basketSlice";
import { useForm } from "react-hook-form";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import BtnBanner from "../../components/btnBanner";
import { Status } from "../../utils/Status";
import BtnCounterControls from "../../components/btnCounterControls";
import BtnNavigation from "../../components/btnNavigation";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff", // 👈 сюда

    "& input": {
      color: "#282828",
    },

    "& input::placeholder": {
      color: "#8B8B8B",
      opacity: 1,
    },

    "& fieldset": {
      borderColor: "#DDDDDD",
    },

    "&:hover fieldset": {
      borderColor: "#c6c2c2",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#0D50FF",
    },
  },
};
function BasketPage() {
  const { ordersList, postOrderStatus } = useSelector(
    (state) => state.basketSlice,
  );
  const { productsList } = useSelector((state) => state.homeSlice);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (!data.name || !data.phone || !data.email) return;
    dispatch(setUsersData(data));
    dispatch(postOrder());
  };

  return (
    <Box
      sx={{
        maxWidth: "85rem",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", mb: "2.5rem", mt: "5rem" }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "64px",
            lineHeight: "110%",
            color: "#282828",
          }}
          variant="h2"
        >
          Basket Page
        </Typography>
        <Divider
          sx={{
            flexGrow: 1,
            maxWidth: "900px",
            ml: "32px",
          }}
        ></Divider>
        <BtnNavigation>Back to the store</BtnNavigation>
      </Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
      >
        <Grid size={7} sx={{ border: "1px solid red" }}>
          {ordersList.products.map((item) => {
            const product = productsList.find(
              (prod) => String(prod.id) === String(item.id),
            );

            if (!product) return null;

            return (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  gap: 2,
                  border: "1px solid #DDDDDD",
                  borderRadius: "12px",
                  mb: 2,
                }}
              >
                <CardMedia
                  component="img"
                  image={"http://localhost:3333" + product.image}
                  alt={product.title}
                  sx={{
                    width: "200px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />

                <Box sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "20px",
                        lineHeight: "130%",
                        color: "#282828",
                        pb: 4,
                      }}
                      variant="h5"
                    >
                      {product.title}
                    </Typography>
                    <IconButton
                      onClick={() => dispatch(delProductFromBasket(item.id))}
                    >
                      <ClearSharpIcon></ClearSharpIcon>
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    {/* <Button
                      variant="contained"
                      sx={{ width: 50 }}
                      onClick={() => dispatch(minusProductInBasket(item.id))}
                    >
                      -
                    </Button>

                    <Typography sx={{ width: 50, textAlign: "center" }}>
                      {item.count || 1}
                    </Typography>

                    <Button
                      variant="contained"
                      sx={{ width: 50 }}
                      onClick={() => dispatch(plusProductInBasket(item.id))}
                    >
                      +
                    </Button> */}
                    <BtnCounterControls
                      count={item.count || 1}
                      onMinus={() => dispatch(minusProductInBasket(item.id))}
                      onPlus={() => dispatch(plusProductInBasket(item.id))}
                    />
                    <Typography
                      sx={{
                        pl: 4,
                        pr: 2,
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "40px",
                        lineHeight: "110%",
                        color: "#282828",
                      }}
                    >
                      {product.discont_price !== null
                        ? item.count * product.discont_price
                        : item.count * product.price}
                      $
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "20px",
                        lineHeight: "130%",
                        textDecorationLine: "line-through",
                        color: "#8B8B8B",
                        alignItems: "flex-end",
                      }}
                    >
                      {product.discont_price !== null
                        ? `${item.count * product.price}$`
                        : ""}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Grid>
        <Grid size={5} sx={{ border: "1px solid red" }}>
          <Box sx={{ background: "#F1F3F4", borderRadius: "12px", p: 4 }}>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "110%",
                color: "#282828",
                pb: 3,
              }}
            >
              Order details
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "40px",
                lineHeight: "130%",
                color: "#8B8B8B",
              }}
            >
              {ordersList.products.length} Items
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                pb: 4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "40px",
                  lineHeight: "130%",
                  color: "#8B8B8B",
                }}
              >
                Total
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "64px",
                  lineHeight: "110%",
                  color: "#282828",
                }}
              >
                $
                {ordersList.products.reduce(
                  (sum, item) =>
                    sum +
                    (productsList.find((p) => String(p.id) === String(item.id))
                      ?.discont_price ??
                      productsList.find((p) => String(p.id) === String(item.id))
                        ?.price) *
                      item.count,
                  0,
                )}
              </Typography>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                rowGap: "16px",
              }}
            >
              <TextField
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={inputStyle}
              />

              <TextField
                placeholder="Phone number"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9+\-\s()]*$/,
                    message: "Invalid phone number",
                  },
                })}
                error={!!errors.phone}
                helperText={errors.phone?.message}
                sx={inputStyle}
              />

              <TextField
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={inputStyle}
              />

              <BtnBanner
                sx={{ background: "#0D50FF", color: "#fff" }}
                fullWidth
                type="submit"
              >
                Order
              </BtnBanner>
            </Box>
          </Box>
        </Grid>
        {postOrderStatus == Status.DONE ? (
          <Typography>Congratulations!</Typography>
        ) : (
          <Box></Box>
        )}
      </Grid>
    </Box>
  );
}

export default BasketPage;
