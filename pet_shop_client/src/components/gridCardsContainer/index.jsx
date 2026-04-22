import { Box, Card, Typography, CardMedia, CardContent } from "@mui/material";
import { Flex } from "antd";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
//import Grid from "@mui/material/Unstable_Grid2";

function GridCardsContainer({ objectsList, CardComponent }) {
  return (
    <Box sx={{ maxWidth: "85rem", margin: "0 auto", border: "1px solid red" }}>
      <Grid
        // container
        // spacing={{ xs: 2, md: 3 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="stretch" // важно
      >
        {objectsList.map((item) => {
          return (
            <Grid key={item.id} size={{ xs: 2, sm: 4, md: 3 }}>
              <CardComponent item={item}></CardComponent>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default GridCardsContainer;
