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
  return (
    <Box>
      <Button onClick={() => console.log(categories)}>
        reducer to console
      </Button>
      <Typography variant="h2">Categories</Typography>
      <Divider></Divider>
      <Button>All categories </Button>
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
            <div key={item.id}>
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
            </div>
          ))}
          {/* <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div> */}
        </Carousel>
      </Spin>
    </Box>
  );
}

export default CategoriesSlider;
