import { useContext } from "react";
import ProductsContext from "../../context";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import {
  Card,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Button,
  Divider,
  Alert,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import Xicon from "../../assets/icons/x_icon.png";
import { FacebookIcon, YellowIcon } from "../../components/icons";

function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClick();
    reset();
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        maxWidth: "1420px",
        width: "100%",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "44px",
          mb: "50px",
        }}
      >
        Контакты
      </Typography>
      <Divider
        sx={{
          mb: "116px",
        }}
      ></Divider>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "81%",
          color: "rgba(0, 0, 0, 0.5)",
          opacity: "0.8",
          mb: "12px",
        }}
      >
        • 8 800 000 00 00
      </Typography>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "81%",
          color: "rgba(0, 0, 0, 0.5)",
          opacity: "0.8",
        }}
      >
        • emailexample@email.com
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          mt: "67px",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: 767 }}
        >
          <Box sx={{ display: "flex", gap: 4 }}>
            <TextField
              sx={{ width: "50%" }}
              {...register("email", {
                required: "Введите email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Неверный email",
                },
              })}
              placeholder="Ваш Email"
            />
            {errors.email && (
              <Typography sx={{ color: "red" }}>
                {errors.email.message}
              </Typography>
            )}
            <TextField
              sx={{ width: "50%" }}
              {...register("name", {
                required: "Введите имя",
                minLength: {
                  value: 2,
                  message: "Минимум 2 символа",
                },
              })}
              placeholder="Ваше имя"
            />
            {errors.name && (
              <Typography sx={{ color: "red" }}>
                {errors.name.message}
              </Typography>
            )}
          </Box>
          <Box>
            <TextField
              sx={{ width: "100%", mt: 4, mb: 4 }}
              multiline
              rows={3}
              {...register("message", {
                required: "Введите сообщение",
                minLength: {
                  value: 10,
                  message: "Минимум 10 символов",
                },
              })}
              placeholder="Введите сообщение"
            />
            {errors.message && (
              <Typography sx={{ color: "red" }}>
                {errors.message.message}
              </Typography>
            )}
          </Box>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#090D1A",
              float: "inline-end",
              padding: "21px 25px 21px 25px",
              borderRadius: "10px",
            }}
            type="submit"
            variant="contained"
          >
            Отправить
          </Button>
        </Box>

        <Box
          sx={{
            width: 400,
            height: 400,
            backgroundColor: "#FAFAFA",
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "18px",
            maxHeight: 221,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "81%",
              color: "rgba(0, 0, 0, 0.7)",
              opacity: 0.8,
              mb: 4,
            }}
          >
            Найдите нас:
          </Typography>
          <Box sx={{ display: "flex" }}>
            <YellowIcon sx={{ width: 76, height: 76 }}></YellowIcon>
            <FacebookIcon
              sx={{ width: 76, height: 76, ml: 5, mr: 5, color: "#1877F2" }}
            ></FacebookIcon>
            <img src={Xicon}></img>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert severity="success" variant="filled">
          Успешно доставлено
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contacts;
