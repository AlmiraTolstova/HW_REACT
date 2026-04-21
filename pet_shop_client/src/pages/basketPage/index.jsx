import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  TextField,
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

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
  "& input::placeholder": {
    color: "#e0e0e0",
    opacity: 1,
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
    <Box>
      <Typography>Basket Page</Typography>
      {ordersList.products.map((item) => {
        const product = productsList.find(
          (prod) => String(prod.id) === String(item.id),
        );

        if (!product) return null;

        return (
          <Card
            key={item.id}
            sx={{ display: "flex", gap: 2, p: 2, border: "1px solid red" }}
          >
            <CardMedia
              sx={{ height: 100, width: 100 }}
              image={"http://localhost:3333" + product.image}
              title={product.title}
            />

            <Box sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h5">{product.title}</Typography>
              </CardContent>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Button
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
                </Button>
                <Typography>
                  {product.discont_price !== null
                    ? item.count * product.discont_price
                    : item.count * product.price}
                  $
                </Typography>
                <Typography sx={{ color: "red" }}>
                  {product.discont_price !== null
                    ? `${item.count * product.price}$`
                    : ""}
                </Typography>
                <IconButton
                  onClick={() => dispatch(delProductFromBasket(item.id))}
                >
                  <ClearSharpIcon></ClearSharpIcon>
                </IconButton>
              </Box>
            </Box>
          </Card>
        );
      })}
      <Box>
        <Typography>Order details</Typography>
        <Typography>{ordersList.products.length} Items</Typography>{" "}
        <Typography>
          Total $
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
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            pb: "32px",
            background: "#4d4949",
            width: "400px",
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

          <BtnBanner fullWidth type="submit">
            Order
          </BtnBanner>
        </Box>
      </Box>
      {postOrderStatus == Status.DONE ? (
        <Typography>Congratulations!</Typography>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
}

export default BasketPage;
