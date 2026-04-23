import { AppBar, Toolbar, Box, IconButton, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import BasketIcon from "../icons/basketIcon";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";

function Header() {
  const { ordersList } = useSelector((state) => state.basketSlice);

  return (
    <Box>
      <Box
        sx={{
          maxWidth: "85rem",
          margin: "0 auto",
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#282828",
            pt: "1.875rem",
            pb: "1.75rem",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <NavLink to="/">
                <Box
                  component="img"
                  src={logo}
                  alt="logo"
                  sx={{
                    width: "4.375rem",
                    height: "4.375rem",
                  }}
                ></Box>
              </NavLink>
            </Box>

            <Box sx={{ display: "flex", gap: 4 }}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                to="/"
              >
                Main Page
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                to="/categoriespage"
              >
                Categories
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                to={`/allproductspage/allproducts`}
              >
                All products
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                to={`/allproductspage/allsales`}
              >
                All Sales
              </NavLink>
              {/* <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              to="/notfoundpage"
            >
              NotFoundPage
            </NavLink> */}
            </Box>

            <IconButton color="inherit" component={NavLink} to="/basketpage">
              <BasketIcon count={ordersList.products.length} size={28} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Divider />
    </Box>
  );
}

export default Header;
