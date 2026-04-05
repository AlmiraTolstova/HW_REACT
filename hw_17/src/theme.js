import { createTheme } from "@mui/material/styles";

// Светлая тема
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

// Тёмная тема
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f990d6",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});
