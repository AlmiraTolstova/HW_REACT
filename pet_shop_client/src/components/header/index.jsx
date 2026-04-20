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
// import { NavLink } from "react-router";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#f5f5f5",
        color: "#333",
        px: 4,
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
              width: 70,
              height: 70,
              borderRadius: "50%",
              backgroundColor: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          ></Box>
        </Box>

        {/* Center: Navigation */}
        <Box sx={{ display: "flex", gap: 4 }}>
          {/* <Link href="#" underline="hover" to="/">
            Main Page
          </Link>
          <Link href="#" underline="hover" to="/categories">
            Categories
          </Link>
          <Link href="#" underline="hover" to="/products">
            All products
          </Link>
          <Link href="#" underline="hover" to="/sales">
            All sales
          </Link> */}
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
            to="/allproductspage"
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
          <ShoppingBagOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
