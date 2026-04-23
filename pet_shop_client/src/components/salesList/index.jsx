import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import BtnNavigation from "../btnNavigation";
import ProductCard from "../productCard";
import { useNavigate } from "react-router-dom";

function SalesList({ saleslist }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        maxWidth: "85rem",
        width: "100%",
        margin: "0 auto",
        pb: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "2.5rem",
          mt: "5rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 700,
            fontSize: "64px",
            lineHeight: "110%",
            color: "#282828",
          }}
        >
          Sale
        </Typography>

        <Divider sx={{ flexGrow: 1, mx: "32px", maxWidth: "900px" }} />

        <BtnNavigation onClick={() => navigate(`/allproductspage/allsales`)}>
          All sales
        </BtnNavigation>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        {saleslist?.map((item) => (
          <ProductCard key={item.id} item={item}></ProductCard>
        ))}
      </Box>
    </Box>
  );
}

export default SalesList;
