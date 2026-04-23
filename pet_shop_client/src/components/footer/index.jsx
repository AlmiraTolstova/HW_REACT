import { Box, Typography, Grid, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { InstagramSvg, WhatsAppSvg } from "../icons/sozialIcon/index";

const cardStyle = {
  backgroundColor: "#F1F3F4",
  borderRadius: "12px",
  p: 3,
};

const labelStyle = {
  color: "#8B8B8B",
  pb: 2,
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.25rem",
  lineHeight: "130%",
};
const infoStyle = {
  color: "#282828",
  pb: 2,
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "2.25rem",
  lineHeight: "110%",
};

function Footer() {
  return (
    <Box
      sx={{
        px: 6,
        py: 6,
        backgroundColor: "#ffffff",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          maxWidth: "85rem",
          margin: "0 auto",
          mb: 4,
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "4rem",
          lineHeight: "110%",
          color: "#282828",
        }}
      >
        Contact
      </Typography>

      <Grid
        container
        rowSpacing={3}
        columnSpacing={3}
        sx={{
          maxWidth: "85rem",
          mx: "auto",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Grid size={7}>
          <Box sx={cardStyle}>
            <Typography variant="h5" sx={labelStyle}>
              Phone
            </Typography>
            <Typography sx={infoStyle}>+49 30 915-88492</Typography>
          </Box>
        </Grid>

        <Grid size={5}>
          <Box sx={cardStyle}>
            <Typography variant="h5" sx={labelStyle}>
              Socials
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton>
                <InstagramSvg sx={{ color: "#282828", fontSize: 43 }} />
              </IconButton>
              <IconButton>
                <WhatsAppSvg sx={{ color: "#282828", fontSize: 43 }} />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid size={7}>
          <Box sx={{ ...cardStyle, minHeight: "12.125rem" }}>
            <Typography variant="h5" sx={labelStyle}>
              Address
            </Typography>
            <Typography sx={infoStyle} variant="h6">
              Wallstraße 9-13, 10179 Berlin, Deutschland
            </Typography>
          </Box>
        </Grid>

        <Grid size={5}>
          <Box sx={{ ...cardStyle, minHeight: "12.125rem" }}>
            <Typography variant="h5" sx={labelStyle}>
              Working Hours
            </Typography>
            <Typography sx={infoStyle}>24 hours a day</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          maxWidth: "85rem",
          margin: "0 auto",
          mt: 4,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <iframe
          title="map"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=Wallstraße+9-13,+Berlin&output=embed"
        />
      </Box>
    </Box>
  );
}
export default Footer;
