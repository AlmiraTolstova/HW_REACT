import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const BtnBanner = styled(Button)(({ theme }) => ({
  borderRadius: "6px",
  textTransform: "none",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "130%",
  //   padding: "16px 180px",
  backgroundColor: "#ffff",
  color: "#282828",
  padding: "16px 32px",
  width: "100%",
  maxWidth: "700px",
  transition: "0.2s ease",
  "&:hover": {
    backgroundColor: "#282828",
    color: "#ffff",
  },

  "&:active": {
    color: "#0D50FF",
    backgroundColor: "#F1F3F4",
  },

  // disabled = Added
  "&.Mui-disabled": {
    backgroundColor: "#ffff",
    color: "#282828",
    border: "1px solid #282828",
  },
}));

export default BtnBanner;
