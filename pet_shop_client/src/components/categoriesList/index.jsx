import { Box, Card, Typography, CardMedia, CardContent } from "@mui/material";
import { Flex } from "antd";

function CategoriesList({ categorieslist }) {
  return (
    <Box sx={{ display: "flex" }}>
      {categorieslist.map((item) => {
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
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
}

export default CategoriesList;
