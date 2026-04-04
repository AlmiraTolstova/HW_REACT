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
  });

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

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
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
            >
              Написать
            </Button>
            <Button
              variant="outlined"
              color={profileSettings.buttonColor}
              size={profileSettings.buttonSize}
            >
              Предложить работу
            </Button>
          </CardActions>

          {profileSettings.showAlert && (
            <Box>
              <Alert sx={{ m: 2 }} severity="info">
                Идет поиск стажеров
              </Alert>
              <Alert sx={{ m: 2 }} severity="info">
                Не забудь загрузить аватарку!
                <Button onClick={handleClick}>Понятно</Button>
              </Alert>
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
