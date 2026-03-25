import { NavLink, Outlet } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

function Layout() {
  const navLinkStyle = ({ isActive }) => ({
    marginLeft: 20,
    textDecoration: "none",
    color: "white",
    fontWeight: isActive ? "bold" : "normal",
    borderBottom: isActive ? "2px solid white" : "none",
  });

  return (
    <Box
      className="layout"
      sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* HEADER */}
      <AppBar position="static">
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Сникер - магазин</Typography>

            <Box>
              <NavLink to="/" style={navLinkStyle} end>
                Главная
              </NavLink>

              <NavLink to="/basket" style={navLinkStyle}>
                Корзина
              </NavLink>

              <NavLink to="/contacts" style={navLinkStyle}>
                Контакты
              </NavLink>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      {/* MAIN */}
      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Container>
          <Outlet />
        </Container>
      </Box>

      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          bgcolor: "grey.200",
          py: 2,
          mt: "auto",
        }}
      >
        <Container>
          <Typography variant="body2" align="center">
            © 2026 Сникер-магазин. Все права защищены
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
