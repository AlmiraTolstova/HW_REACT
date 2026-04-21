import { Box, Typography } from "@mui/material";
import FilterSelector from "../filterSelector";
import CustomCheckbox from "../customCheckbox";
import PriceRange from "../priceRange";

function ProductSortingFilters() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: "32px",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <PriceRange></PriceRange>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography>Discounted items</Typography>
        <CustomCheckbox></CustomCheckbox>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography>Sorted</Typography>
        <FilterSelector></FilterSelector>
      </Box>
    </Box>
  );
}

export default ProductSortingFilters;
