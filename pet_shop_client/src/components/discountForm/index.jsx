import { useForm } from "react-hook-form";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getDiscount, resetDiscountStatus } from "../../redux/slices/homeSlice";
import Snackbar from "@mui/material/Snackbar";
import { useState, useEffect } from "react";
import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Status } from "../../utils/Status";
import BtnBanner from "../btnBanner";
import Img from "../../assets/image.png";

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

function DiscountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { discountStatus } = useSelector((state) => state.homeSlice);

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  useEffect(() => {
    if (discountStatus === Status.DONE) {
      setOpen(true);
      dispatch(resetDiscountStatus());
    }
  }, [discountStatus, dispatch]);

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Close
      </Button>
      <IconButton size="small" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const onSubmit = (data) => {
    if (!data.name || !data.phone || !data.email) return;
    dispatch(getDiscount(data));
  };

  return (
    <Box
      sx={{
        maxWidth: "85rem",
        margin: "0 auto",
        textAlign: "center",
        pt: 2,
        borderRadius: 4,
        background: "linear-gradient(90deg, #1e4ed8, #3b82f6)",
        color: "#fff",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontWeight: 700,
          fontSize: "64px",
          lineHeight: "110%",
          pb: "24px",
        }}
        variant="h4"
      >
        5% off on the first order
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          p: "32px 32px 0px 32px",
          gap: 4,
        }}
      >
        {/* Left side */}
        <Box sx={{ flex: 1 }}>
          <Box
            component="img"
            src={Img}
            alt="pets-image"
            sx={{ maxWidth: "100%", height: "auto", display: "block" }}
          />
        </Box>

        {/* Right side form */}
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            pb: "32px",
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
            Get a discount
          </BtnBanner>
        </Box>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Your discount voucher will be sent to you by email."
        action={action}
      />
    </Box>
  );
}

export default DiscountForm;
