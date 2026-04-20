import { Box, Typography } from "@mui/material";
import BtnCard from "../btnCard";
function MainBanner() {
  return (
    <Box
      sx={{
        position: "relative",
        // height: "37.5rem",
        backgroundImage: "url('./src/assets/imgMainBanner.png')", // вставь свою картинку
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* контент */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "85rem",
          margin: "auto",
          pt: "5rem",
          pb: "14rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#FFFFFF",
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "96px",
            lineHeight: "110%",
            maxWidth: "62rem",
            pb: "40px",
          }}
        >
          Amazing Discounts on Pets Products!
        </Typography>

        <BtnCard>Check out</BtnCard>
      </Box>
    </Box>
  );
}
export default MainBanner;
