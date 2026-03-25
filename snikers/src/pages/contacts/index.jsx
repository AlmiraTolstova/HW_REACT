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
    <div>
      <Typography>Контакты</Typography>
      <Divider></Divider>
      <Typography>8 800 000 00 00</Typography>
      <Typography>emailexample@email.com</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <TextField
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
            <Typography sx={{ color: "red" }}>{errors.name.message}</Typography>
          )}
        </Box>
        <Box>
          <TextField
            sx={{ width: "40%" }}
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
        <Button type="submit">Отправить</Button>
      </form>
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
    </div>
  );
}

export default Contacts;
