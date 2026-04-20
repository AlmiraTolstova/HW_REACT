import { Box, Button } from "@mui/material";
import { Carousel, Divider } from "antd";
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

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#f3f5f8",
};

function CategoriesSlider() {
  const { categories, categoriesStatus } = useSelector(
    (state) => state.homeSlice,
  );
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/allproductspage/${item.id}`);
  };

  return (
    <Box>
      <Button onClick={() => console.log(categories)}>
        reducer to console
      </Button>
      <Box>
        <Typography variant="h2">Categories</Typography>
        <Divider></Divider>
        <Button>All categories </Button>
        <BtnNavigation>All categories</BtnNavigation>
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
            <Box
              key={item.id}
              onClick={() => {
                handleClick(item);
              }}
            >
              <Card sx={{ maxWidth: 345, mx: "auto" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={"http://localhost:3333" + item.image}
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Spin>
    </Box>
  );
}

export default CategoriesSlider;
