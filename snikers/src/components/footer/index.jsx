import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "grey.200", py: 2, mt: "auto" }}>
      <Container>
        <Typography
          variant="body2"
          align="center"
          sx={{ fontFamily: "Montserrat, sans-serif" }}
        >
          © 2026 Сникерс-магазин. Все права защищены
        </Typography>
      </Container>
    </Box>
  );
}
