import { Box, Typography, Divider } from "@mui/material";
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
          mr: { xs: "0.5rem", sm: "auto" },
          ml: { xs: "0.5rem", sm: "auto" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 700,
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },

            lineHeight: "110%",
            color: "#282828",
          }}
        >
          Sale
        </Typography>

        <Divider
          sx={{
            flexGrow: 1,
            ml: "32px",
          }}
        />

        <BtnNavigation onClick={() => navigate(`/allproductspage/allsales`)}>
          All sales
        </BtnNavigation>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: {
            xs: "center",
            sm: "space-between",
            md: "space-between",
          },
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
