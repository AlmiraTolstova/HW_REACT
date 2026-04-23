import { Box, Typography } from "@mui/material";
import BtnCard from "../btnCard";
import Banner from "../../assets/imgMainBanner.png";
function MainBanner() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        minHeight: "37.5rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          // width: "85rem",
          margin: "auto",
          pt: "5rem",
          // pb: "14rem",
          pb: {
            xs: "6rem",
            md: "10rem",
            lg: "14rem",
          },
          maxWidth: "85rem",
          width: "100%",
          mx: "auto",
          px: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#FFFFFF",
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 700,
            // fontSize: "96px",
            fontSize: {
              xs: "2.5rem",
              sm: "3rem",
              md: "4rem",
              lg: "6rem",
            },
            lineHeight: "110%",
            maxWidth: "62rem",
            pb: 5,
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
