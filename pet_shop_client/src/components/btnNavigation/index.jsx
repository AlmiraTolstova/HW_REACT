import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const BtnNavigation = styled(Button, {
  shouldForwardProp: (prop) => prop !== "added",
})(({ added }) => ({
  borderRadius: "6px",
  textTransform: "none",
  padding: "8px 16px",
  border: "1px solid #DDDDDD",
  gap: "10px",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "126%",
  color: "#8B8B8B",
  background: "transparent",

  // active
  ...(added && {
    color: "#282828",
  }),

  // hover
  "&:hover": {
    background: "#F5F5F5",
  },
}));

export default BtnNavigation;
