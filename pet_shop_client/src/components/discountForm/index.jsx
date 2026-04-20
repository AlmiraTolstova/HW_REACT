import { useForm } from "react-hook-form";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getDiscount, resetDiscountStatus } from "../../redux/slices/homeSlice";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
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

function DiscountForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { discount, discountStatus } = useSelector((state) => state.homeSlice);

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

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
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const onSubmit = (data) => {
    dispatch(getDiscount());
  };
  return (
    <Box
      sx={{
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
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "64px",
          lineHeight: "110%",
        }}
        variant="h4"
      >
        5% off on the first order
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 6,
          gap: 4,
        }}
      >
        {/* Left side */}
        <Box sx={{ flex: 1 }}>
          <Box
            component="img"
            src="./src/assets/image.png"
            alt="pets-image"
            sx={{ maxWidth: "100%", height: "auto" }}
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
          }}
        >
          <TextField
            placeholder="Name"
            variant="outlined"
            {...register("name")}
            sx={inputStyle}
          />

          <TextField
            placeholder="Phone number"
            {...register("phone")}
            sx={inputStyle}
          />

          <TextField
            placeholder="Email"
            {...register("email")}
            sx={inputStyle}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#e5e5e5",
              color: "#333",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#d4d4d4",
              },
            }}
          >
            Get a discount
          </Button>
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
