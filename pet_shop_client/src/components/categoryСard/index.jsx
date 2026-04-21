import { Box, Button, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

function CategoryCard({ item }) {
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/allproductspage/${item.id}`);
  };
  return (
    <div>
      <Box
        key={item.id}
        onClick={() => {
          handleClick(item);
        }}
      >
        <Box sx={{ maxWidth: "316px", mx: "auto", mb: "6.625rem" }}>
          <CardMedia
            sx={{
              height: "350px",
              backgroundSize: "contain",
              borderRadius: "12px",
            }}
            image={"http://localhost:3333" + item.image}
            title={item.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "130%",
                textAlign: "center",
                color: "#282828",
              }}
            >
              {item.title}
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </div>
  );
}

export default CategoryCard;
