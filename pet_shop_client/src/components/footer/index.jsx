import { Box, Typography, Grid, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { InstagramSvg, WhatsAppSvg } from "../icons/sozialIcon/index";

const cardStyle = {
  backgroundColor: "#eaeaea",
  borderRadius: 2,
  p: 3,
  //   height: "100%",
};

const labelStyle = {
  color: "#777",
  mb: 1,
};

function Footer() {
  return (
    <Box
      sx={{
        px: 6,
        py: 6,
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{ maxWidth: "85rem", margin: "0 auto", mb: 4, fontWeight: 700 }}
      >
        Contact
      </Typography>

      {/* Top blocks */}
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
        sx={{
          maxWidth: "85rem",
          margin: "0 auto",
        }}
        //alignItems="stretch"
      >
        {/* Phone */}
        <Grid size={6}>
          <Box sx={cardStyle}>
            <Typography sx={labelStyle}>Phone</Typography>
            <Typography variant="h4">+49 30 915-88492</Typography>
          </Box>
        </Grid>

        {/* Socials */}
        <Grid size={6}>
          <Box sx={cardStyle}>
            <Typography sx={labelStyle}>Socials</Typography>
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

        {/* Address */}
        <Grid size={6}>
          <Box sx={cardStyle}>
            <Typography sx={labelStyle}>Address</Typography>
            <Typography variant="h5">
              Wallstraße 9-13, 10179 Berlin, Deutschland
            </Typography>
          </Box>
        </Grid>

        {/* Working Hours */}
        <Grid size={6}>
          <Box sx={cardStyle}>
            <Typography sx={labelStyle}>Working Hours</Typography>
            <Typography variant="h4">24 hours a day</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Map */}
      <Box
        sx={{
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
