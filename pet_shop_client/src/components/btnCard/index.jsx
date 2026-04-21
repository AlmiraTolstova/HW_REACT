import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const BtnCard = styled(Button)(({ theme }) => ({
  borderRadius: "6px",
  textTransform: "none",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "130%",
  padding: "16px 82px",
  backgroundColor: "#0D50FF",
  color: "#FFFFFF",

  "&:hover": {
    backgroundColor: "#282828",
  },

  "&:active": {
    backgroundColor: "#282828",
  },

  // disabled = Added
  "&.Mui-disabled": {
    backgroundColor: "white",
    color: "#282828",
    border: "1px solid #282828",
  },
}));

export default BtnCard;
