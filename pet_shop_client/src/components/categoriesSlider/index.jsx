import { Box, Typography, Divider } from "@mui/material";
import { Carousel } from "antd";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Status } from "../../utils/Status";
import { useNavigate } from "react-router-dom";
import BtnNavigation from "../btnNavigation";
import CategoryCard from "../categoryСard";

function CategoriesSlider() {
  const { categories, categoriesStatus } = useSelector(
    (state) => state.homeSlice,
  );
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        maxWidth: "85rem",
        margin: "0 auto",
        pb: 11,
        // border: "1px solid green",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", mb: "2.5rem", mt: "5rem" }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "4rem",
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
            // maxWidth: "900px",
            ml: "32px",
          }}
        ></Divider>
        <BtnNavigation onClick={() => navigate(`/categoriespage`)}>
          All categories
        </BtnNavigation>
      </Box>
      {categoriesStatus === Status.ERROR && (
        <Typography color="error">Failed to load categories</Typography>
      )}
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
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
          ]}
        >
          {/* {categories.map((item) => (
            <CategoryCard item={item}></CategoryCard>
          ))} */}
          {categories.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </Carousel>
      </Spin>
    </Box>
  );
}

export default CategoriesSlider;
