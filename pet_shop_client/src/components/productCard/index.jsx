import { Box, Card, Typography, CardMedia, CardContent } from "@mui/material";
import { Flex } from "antd";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/productcard/${item.id}`);
  };
  return (
    <Box
      key={item.id}
      onClick={() => {
        handleClick(item);
      }}
    >
      <Card sx={{ width: 200, mx: "auto" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={"http://localhost:3333" + item.image}
          title={item.title}
        />
        <CardContent>
          {item.discount_percentage ? (
            <Typography sx={{ backgroundColor: "blue" }}>
              -{item.discount_percentage}%
            </Typography>
          ) : (
            <Typography></Typography>
          )}
          <Typography>{item.title}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductCard;
