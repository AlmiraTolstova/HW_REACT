import { Box, Typography } from "@mui/material";
import FilterSelector from "../filterSelector";
import CustomCheckbox from "../customCheckbox";
import PriceRange from "../priceRange";

const containerStyle = {
  maxWidth: "85rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  gap: "2.5rem",
  border: "1px solid red",
};

const flexCenter = {
  display: "flex",
  alignItems: "center",
};

const labelText = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "130%",
  color: "#282828",
};

function ProductSortingFilters() {
  return (
    <Box sx={containerStyle}>
      <Box sx={{ display: "flex" }}>
        <PriceRange />
      </Box>

      <Box sx={flexCenter}>
        <Typography sx={{ ...labelText, pr: 2 }}>Discounted items</Typography>
        <CustomCheckbox />
      </Box>

      <Box sx={flexCenter}>
        <Typography sx={{ ...labelText, pr: 2 }}>Sorted</Typography>
        <FilterSelector />
      </Box>
    </Box>
  );
}

export default ProductSortingFilters;
