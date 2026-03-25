import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Header from "../header";
import Footer from "../footer";

export default function Layout() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Container>
          <Outlet />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
