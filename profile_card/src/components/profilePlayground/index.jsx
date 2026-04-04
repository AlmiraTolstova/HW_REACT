import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Slider from "@mui/material/Slider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";
import Chip from "@mui/material/Chip";
import CloudUploadSharpIcon from "@mui/icons-material/CloudUploadSharp";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function ProfilePlayground() {
  const [profileSettings, setProfileSettings] = useState({
    name: "Anna",
    surname: "Ivanova",
    avatarSize: 80,
    buttonColor: "primary",
    buttonSize: "medium",
    isOnline: false,
    cardVariant: "elevation",
    showAlert: false,
    profession: "Разработчик",
    avatarImage: null,
    openPopper: false,
    messageForUser: false,
    openModal: false,
    requestSent: false,
    requestCanceled: false,
  });

  const ModalhandleOpen = () => {
    setProfileSettings({
      ...profileSettings,
      openModal: true,
    });
  };
  const ModalhandleClose = () => {
    setProfileSettings({
      ...profileSettings,
      openModal: false,
    });
  };

  const handleClick = () => {
    setProfileSettings({
      ...profileSettings,
      openPopper: true,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setProfileSettings({
      ...profileSettings,
      openPopper: false,
    });
  };

  const sendMessageHandleClick = () => {
    setProfileSettings({
      ...profileSettings,
      messageForUser: true,
    });
  };

  const sendMessageHandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setProfileSettings({
      ...profileSettings,
      messageForUser: false,
    });
  };

  const sendRequestHandleClick = () => {
    setProfileSettings({
      ...profileSettings,
      requestSent: true,
    });
    setTimeout(() => {
      setProfileSettings({
        ...profileSettings,
        openModal: false,
        requestSent: false,
      });
    }, 2000);
  };

  const RequestCanceledHandleClick = () => {
    setProfileSettings({
      ...profileSettings,
      requestCanceled: true,
    });
    setTimeout(() => {
      setProfileSettings({
        ...profileSettings,
        openModal: false,
        requestCanceled: false,
      });
    }, 2000);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        CLOSE
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

  const action2 = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={sendMessageHandleClose}>
        CLOSE
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={sendMessageHandleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setProfileSettings({
        ...profileSettings,
        avatarImage: imageUrl,
      });
    }
  };

  return (
    <Stack direction="row" spacing={4} sx={{ p: 4 }}>
      {/* PERSON CARD */}
      <Box flex={1}>
        <Typography variant="h6">Карточка профиля</Typography>

        <Card
          variant={
            profileSettings.cardVariant === "outlined" ? "outlined" : undefined
          }
          sx={{
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 6,
            },
          }}
        >
          <CardContent>
            <IconButton component="label">
              <input
                hidden
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
              />
              <CloudUploadSharpIcon></CloudUploadSharpIcon>
            </IconButton>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant={profileSettings.isOnline ? "dot" : "standard"}
            >
              <Avatar
                src={profileSettings.avatarImage}
                sx={{
                  width: profileSettings.avatarSize,
                  height: profileSettings.avatarSize,
                  transition: "0.3s",
                  bgcolor:
                    profileSettings.buttonColor === "primary"
                      ? "#1976d2"
                      : profileSettings.buttonColor === "secondary"
                        ? "#9c27b0"
                        : profileSettings.buttonColor === "success"
                          ? "#2e7d32"
                          : "#d32f2f",
                  color: "white",
                }}
              >
                {profileSettings.name[0]}
              </Avatar>
            </StyledBadge>
            <Typography variant="h6">
              {profileSettings.isOnline ? "● " : "○ "}
              {profileSettings.name} {profileSettings.surname}
            </Typography>
            <Typography color={profileSettings.isOnline ? "green" : "gray"}>
              {profileSettings.isOnline ? "Онлайн" : "Офлайн"}
            </Typography>
            <Chip
              label={profileSettings.profession}
              sx={{ mt: 1 }}
              color={
                profileSettings.isOnline
                  ? profileSettings.buttonColor
                  : "default"
              }
            />{" "}
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              color={profileSettings.buttonColor}
              size={profileSettings.buttonSize}
              onClick={sendMessageHandleClick}
            >
              Написать
            </Button>
            <Button
              variant="outlined"
              color={profileSettings.buttonColor}
              size={profileSettings.buttonSize}
              onClick={ModalhandleOpen}
            >
              Предложить работу
            </Button>
          </CardActions>

          <Modal
            open={profileSettings.openModal}
            onClose={ModalhandleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleModal}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {`Хочешь предложить работу ${profileSettings.name} ${profileSettings.surname}`}
              </Typography>
              <Button
                onClick={sendRequestHandleClick}
                disabled={profileSettings.requestCanceled}
              >
                Ok
              </Button>
              <Button
                onClick={RequestCanceledHandleClick}
                disabled={profileSettings.requestSent}
              >
                Cancel
              </Button>
              {profileSettings.requestSent ? (
                <Alert sx={{ width: "100%" }} severity="success">
                  Заявка отправлена! {profileSettings.name}{" "}
                  {profileSettings.surname} получит предложение
                </Alert>
              ) : (
                <Box />
              )}
              {profileSettings.requestCanceled ? (
                <Alert sx={{ width: "100%" }} severity="warning">
                  Отправка отменена
                </Alert>
              ) : (
                <Box />
              )}
            </Box>
          </Modal>

          {profileSettings.showAlert && (
            <Box>
              <Alert sx={{ width: "100%" }} severity="info">
                Идет поиск стажеров
              </Alert>
              <Alert sx={{ width: "100%" }} severity="info">
                Не забудь загрузить аватарку!
                <Button onClick={handleClick}>Понятно</Button>
              </Alert>
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="success">Отлично! MUI работает</Alert>
                <Alert severity="info">Попробуй изменить цвет кнопок</Alert>
                <Alert severity="warning">Не забывай про атрибуты</Alert>
                <Alert severity="error">Ошибок нет, все отлично!</Alert>
              </Stack>
            </Box>
          )}
        </Card>
        <Snackbar
          open={profileSettings.openPopper}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Спасибо, что прочитал!"
          action={action}
        />
        <Snackbar
          open={profileSettings.messageForUser}
          autoHideDuration={3000}
          onClose={sendMessageHandleClose}
          message={`Напиши сообщение для ${profileSettings.name} ${profileSettings.surname}`}
          action={action2}
        />
      </Box>

      {/* --------SETTINGS CARD------- */}
      <Box flex={1}>
        <Typography variant="h6">Настройки</Typography>

        <Card sx={{ p: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Имя"
              value={profileSettings.name}
              onChange={(e) =>
                setProfileSettings({
                  ...profileSettings,
                  name: e.target.value,
                })
              }
            />

            <TextField
              label="Фамилия"
              value={profileSettings.surname}
              onChange={(e) =>
                setProfileSettings({
                  ...profileSettings,
                  surname: e.target.value,
                })
              }
            />

            <Slider
              value={profileSettings.avatarSize}
              min={40}
              max={150}
              onChange={(e, value) =>
                setProfileSettings({
                  ...profileSettings,
                  avatarSize: value,
                })
              }
            />

            <Select
              value={profileSettings.profession}
              onChange={(e) =>
                setProfileSettings({
                  ...profileSettings,
                  profession: e.target.value,
                })
              }
            >
              <MenuItem value="Разработчик">Разработчик</MenuItem>
              <MenuItem value="Дизайнер">Дизайнер</MenuItem>
              <MenuItem value="Менеджер">Менеджер</MenuItem>
              <MenuItem value="Аналитик">Аналитик</MenuItem>
            </Select>

            <FormControl>
              <RadioGroup
                row
                value={profileSettings.buttonColor}
                onChange={(e) =>
                  setProfileSettings({
                    ...profileSettings,
                    buttonColor: e.target.value,
                  })
                }
              >
                <FormControlLabel
                  value="primary"
                  control={<Radio />}
                  label="Primary"
                />
                <FormControlLabel
                  value="secondary"
                  control={<Radio />}
                  label="Secondary"
                />
                <FormControlLabel
                  value="success"
                  control={<Radio />}
                  label="Success"
                />
                <FormControlLabel
                  value="error"
                  control={<Radio />}
                  label="Error"
                />
              </RadioGroup>
            </FormControl>

            <FormControl>
              <RadioGroup
                row
                value={profileSettings.buttonSize}
                onChange={(e) =>
                  setProfileSettings({
                    ...profileSettings,
                    buttonSize: e.target.value,
                  })
                }
              >
                <FormControlLabel
                  value="small"
                  control={<Radio />}
                  label="Small"
                />
                <FormControlLabel
                  value="medium"
                  control={<Radio />}
                  label="Medium"
                />
                <FormControlLabel
                  value="large"
                  control={<Radio />}
                  label="Large"
                />
              </RadioGroup>
            </FormControl>

            <FormControlLabel
              control={
                <Switch
                  checked={profileSettings.isOnline}
                  onChange={(e) =>
                    setProfileSettings({
                      ...profileSettings,
                      isOnline: e.target.checked,
                    })
                  }
                />
              }
              label="Онлайн статус"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={profileSettings.showAlert}
                  onChange={(e) =>
                    setProfileSettings({
                      ...profileSettings,
                      showAlert: e.target.checked,
                    })
                  }
                />
              }
              label="Показать Alert"
            />
          </Box>
        </Card>
      </Box>
    </Stack>
  );
}

export default ProfilePlayground;
