import { Box, Button, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../api/api";

function CategoryCard({ item }) {
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/allproductspage/${item.id}`);
  };
  return (
    <Box
      onClick={() => {
        handleClick(item);
      }}
    >
      <Box
        sx={{
          maxWidth: "19.75rem",
          mx: "auto",
          height: "100%", // ключевой момент
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-4px)",
            transition: "0.2s",
          },
        }}
      >
        <CardMedia
          sx={{
            height: "350px",
            backgroundSize: "contain",
            borderRadius: "12px",
            // border: "1px solid red",
          }}
          image={BASE_URL + item.image}
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
              fontSize: "1.25rem",
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
  );
}

export default CategoryCard;
