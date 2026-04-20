import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
  Link,
} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import BasketIcon from "../icons";

function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#FFFFFF",
        color: "#282828",
        pt: "1.875rem",
        pb: "1.75rem",
        border: "1px solid red",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            component="img"
            src="./src/assets/logo.png"
            alt="logo"
            sx={{
              width: "70px",
              height: "70px",
            }}
          ></Box>
        </Box>

        {/* Center: Navigation */}
        <Box sx={{ display: "flex", gap: 4 }}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            to="/"
          >
            Main Page
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            to="/categoriespage"
          >
            Categories
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            to={`/allproductspage/-1`}
          >
            All products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            to="/allsalespage"
          >
            All Sales
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            to="/notfoundpage"
          >
            NotFoundPage
          </NavLink>
        </Box>

        {/* Right: Cart */}
        <IconButton color="inherit" component={NavLink} to="/basketpage">
          <BasketIcon count={""} size={28} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
