import { Box, Button } from "@mui/material";
import { Carousel } from "antd";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Status } from "../../utils/Status";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import BtnNavigation from "../btnNavigation";
import styles from "./styles.module.css";
import CategoryCard from "../categoryСard";

function CategoriesSlider() {
  const { categories, categoriesStatus } = useSelector(
    (state) => state.homeSlice,
  );
  const navigate = useNavigate();
  // const handleClick = (item) => {
  //   navigate(`/allproductspage/${item.id}`);
  // };

  return (
    <Box
      sx={{ maxWidth: "85rem", width: "100%", margin: "0 auto", px: 2, pb: 11 }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", mb: "2.5rem", mt: "5rem" }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "64px",
            lineHeight: "110%",
            color: "#282828",
          }}
          variant="h2"
        >
          Categories
        </Typography>
        <Divider
          sx={{
            flexGrow: 1,
            maxWidth: "900px",
            ml: "32px",
          }}
        ></Divider>
        <BtnNavigation onClick={() => navigate(`/categoriespage`)}>
          All categories
        </BtnNavigation>
      </Box>

      <Spin
        indicator={<LoadingOutlined spin />}
        size="large"
        spinning={categoriesStatus === Status.LOADING ? true : false}
      >
        <Carousel
          arrows
          infinite
          slidesToShow={4}
          autoplay
          autoplaySpeed={3000}
          dots={false}
        >
          {categories.map((item) => (
            <CategoryCard item={item}></CategoryCard>
          ))}
        </Carousel>
      </Spin>
    </Box>
  );
}

export default CategoriesSlider;
