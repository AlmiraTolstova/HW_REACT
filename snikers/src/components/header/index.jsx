import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

import { styled } from "@mui/system";

// Стилизованный AppBar
const StyledAppBar = styled(AppBar)({
  backgroundColor: "#3B3C3D",
  fontFamily: "Montserrat, sans-serif",
  height: 110,
});

// Стилизованный заголовок
const Logo = styled(Typography)({
  fontFamily: "Montserrat, sans-serif",
  fontStyle: "normal",
  fontWeight: 900,
  fontSize: 20,
  lineHeight: 24,
  color: "#FFFFFF",
});

// Стилизованный NavLink
const StyledNavLink = styled(NavLink)(({ isActive }) => ({
  marginLeft: 64,
  textDecoration: "none",
  color: isActive ? "#FFFFFF" : "#9D9D9E",
  fontWeight: isActive ? 600 : 400,
  fontSize: 15,
  lineHeight: 18,
}));

function Header() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo>Сникер - магазин</Logo>

          <Box>
            <StyledNavLink to="/" end>
              Главная
            </StyledNavLink>
            <StyledNavLink to="/basket">Корзина</StyledNavLink>
            <StyledNavLink to="/contacts">Контакты</StyledNavLink>
          </Box>
        </Container>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
