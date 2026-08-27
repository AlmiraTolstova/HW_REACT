import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Divider,
  Drawer,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import BasketIcon from "../icons/basketIcon";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

function Header() {
  const { ordersList } = useSelector((state) => state.basketSlice);
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
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
            pt: {
              xs: "1rem",
              sm: "1.5rem",
              md: "1.875rem",
            },
            pb: {
              xs: "1rem",
              sm: "1.5rem",
              md: "1.75rem",
            },
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {/* Logo */}
              <NavLink
                to="/"
                style={{
                  display: "flex",
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="logo"
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                    },
                    width: {
                      sm: "4rem",
                      md: "4.375rem",
                    },
                    height: {
                      sm: "4rem",
                      md: "4.375rem",
                    },
                  }}
                ></Box>
              </NavLink>
              {/* Burger - только mobile */}
              <IconButton
                onClick={() => setOpenMenu(true)}
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                  padding: 0,
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Desktop navigation */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                gap: 4,
              }}
            >
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

            {/* Mobile burger + basket */}
            <Box>
              <IconButton color="inherit" component={NavLink} to="/basketpage">
                <BasketIcon
                  count={ordersList.products.length}
                  size={isMobile ? 24 : 48}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left"
          open={openMenu}
          onClose={() => setOpenMenu(false)}
        >
          <Box
            sx={{
              width: "280px",
              p: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <IconButton
              onClick={() => setOpenMenu(false)}
              sx={{
                alignSelf: "flex-end",
              }}
            >
              <CloseIcon />
            </IconButton>

            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              to="/"
              onClick={() => setOpenMenu(false)}
            >
              Main Page
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              to="/categoriespage"
              onClick={() => setOpenMenu(false)}
            >
              Categories
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              to="/allproductspage/allproducts"
              onClick={() => setOpenMenu(false)}
            >
              All products
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              to="/allproductspage/allsales"
              onClick={() => setOpenMenu(false)}
            >
              All Sales
            </NavLink>
          </Box>
        </Drawer>
      </Box>
      <Divider />
    </Box>
  );
}

export default Header;
