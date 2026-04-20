import { Box, Card, Typography, CardMedia, CardContent } from "@mui/material";
import { Flex } from "antd";

function SalesList({ saleslist }) {
  return (
    <Box sx={{ display: "flex" }}>
      SalesList
      {saleslist.map((item) => {
        return (
          <Box key={item.id}>
            <Card sx={{ maxWidth: 345, mx: "auto" }}>
              <CardMedia
                sx={{ height: 140 }}
                image={"http://localhost:3333" + item.image}
                title={item.title}
              />
              <CardContent>
                <Typography>{item.title}</Typography>
                <Typography>{item.discont_price}$ </Typography>
                <Typography>{item.price}$</Typography>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
}

export default SalesList;
