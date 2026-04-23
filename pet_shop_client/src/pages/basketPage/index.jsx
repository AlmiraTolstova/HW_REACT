import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
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
  resetPostOrderStatus,
} from "../../redux/slices/basketSlice";
import { useForm } from "react-hook-form";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import BtnBanner from "../../components/btnBanner";
import { Status } from "../../utils/Status";
import BtnCounterControls from "../../components/btnCounterControls";
import BtnNavigation from "../../components/btnNavigation";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useState, useEffect } from "react";
import { resetDiscountStatus } from "../../redux/slices/homeSlice";
import CloseIcon from "@mui/icons-material/Close";
import BtnCard from "../../components/btnCard";
import { BASE_URL } from "../../api/api";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",

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
  const [open, setOpen] = useState(false);
  const { productsList } = useSelector((state) => state.homeSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (postOrderStatus === Status.DONE) {
      setOpen(true);
      dispatch(resetPostOrderStatus());
    }
  }, [postOrderStatus, dispatch]);

  return (
    <Box
      sx={{
        maxWidth: "85rem",
        margin: "0 auto",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: "2.5rem", mt: 5 }}>
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
          Shopping cart
        </Typography>
        <Divider
          sx={{
            flexGrow: 1,
            maxWidth: "900px",
            ml: "32px",
          }}
        ></Divider>
        <BtnNavigation onClick={() => navigate(`/allproductspage/allproducts`)}>
          Back to the store
        </BtnNavigation>
      </Box>

      {ordersList.products.length > 0 ? (
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{
            xs: 1,
            sm: 2,
            md: 3,
          }}
        >
          <Grid size={7}>
            {ordersList.products.map((item) => {
              const product = productsList.find(
                (p) => String(p.id) === String(item.id),
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
                    position: "relative",
                  }}
                >
                  <IconButton
                    onClick={() => dispatch(delProductFromBasket(item.id))}
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                    }}
                  >
                    <ClearSharpIcon />
                  </IconButton>

                  <CardMedia
                    component="img"
                    image={BASE_URL + product.image}
                    alt={product.title}
                    sx={{
                      width: "12.5rem",
                      maxHeight: "180px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />

                  <Box sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ pb: 2 }}>
                      {product.title}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <BtnCounterControls
                        count={item.count || 1}
                        onMinus={() => dispatch(minusProductInBasket(item.id))}
                        onPlus={() => dispatch(plusProductInBasket(item.id))}
                      />

                      <Typography sx={{ pl: 3, fontSize: "2rem" }}>
                        {(product.discont_price ?? product.price) * item.count}$
                      </Typography>

                      {product.discont_price && (
                        <Typography
                          sx={{
                            textDecoration: "line-through",
                            ml: 2,
                            color: "#888",
                          }}
                        >
                          {product.price * item.count}$
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Grid>
          <Grid size={5} sx={{}}>
            <Box sx={{ background: "#F1F3F4", borderRadius: "12px", p: 4 }}>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "2.5rem",
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
                  fontSize: "2.5rem",
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
                    fontSize: "4rem",
                    lineHeight: "110%",
                    color: "#282828",
                  }}
                >
                  $
                  {ordersList.products.reduce(
                    (sum, item) =>
                      sum +
                      (productsList.find(
                        (p) => String(p.id) === String(item.id),
                      )?.discont_price ??
                        productsList.find(
                          (p) => String(p.id) === String(item.id),
                        )?.price) *
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
        </Grid>
      ) : (
        <Box>
          <Typography
            sx={{
              pt: 3,
              pb: 4,
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "130%",
              color: "#282828",
            }}
          >
            Looks like you have no items in your basket currently.
          </Typography>

          <BtnCard
            sx={{ mb: 5 }}
            onClick={() => navigate(`/allproductspage/allproducts`)}
          >
            Continue Shopping
          </BtnCard>
        </Box>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              borderRadius: "12px",
              p: 4,
              textAlign: "left",
              backgroundColor: "#0D50FF",
              position: "relative",
            },
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            color: "#fff",
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogTitle
          sx={{
            fontWeight: 600,
            fontFamily: "Montserrat",
            fontSize: "40px",
            color: "#FFFFFF",
          }}
        >
          Congratulations!
        </DialogTitle>

        <DialogContent>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "20px",
            }}
          >
            Your order has been successfully placed on the website. A manager
            will contact you shortly to confirm your order.
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default BasketPage;
