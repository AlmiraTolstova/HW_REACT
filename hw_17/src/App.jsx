import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { lightTheme, darkTheme } from "./theme";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: "8px",
  padding: "10px 20px",
  marginTop: "20px",

  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />

      <Typography variant="h2" sx={{ color: "primary.main" }}>
        {isDarkTheme ? "Dark theme" : "Light theme"}
      </Typography>

      <StyledButton onClick={toggleTheme}>Toggle Theme</StyledButton>
    </ThemeProvider>
  );
}

export default App;
