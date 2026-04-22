import { Box, TextField, Typography, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterPriceFrom,
  setFilterPriceTo,
} from "../../redux/slices/homeSlice";

const Wrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

const StyledInput = styled(TextField)(() => ({
  maxWidth: "112px",

  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    backgroundColor: "#ffff",

    "& fieldset": {
      borderColor: "#DDDDDD",
    },

    "&:hover fieldset": {
      borderColor: "#DDDDDD",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#DDDDDD",
    },
  },

  "& input": {
    padding: "8px 16px",
    fontSize: "16px",
    color: "#8B8B8B",
  },
}));

function PriceRange() {
  const { filterPriceFrom, filterPriceTo } = useSelector(
    (state) => state.homeSlice,
  );
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontSize: "20px",
          fontWeight: 600,
          color: "#282828",
          lineHeight: "130%",
        }}
      >
        Price
      </Typography>

      <StyledInput
        value={filterPriceFrom}
        onChange={(e) => dispatch(setFilterPriceFrom(e.target.value))}
        placeholder="from"
        variant="outlined"
      />
      <StyledInput
        value={filterPriceTo}
        onChange={(e) => dispatch(setFilterPriceTo(e.target.value))}
        placeholder="to"
        variant="outlined"
      />
    </Wrapper>
  );
}

export default PriceRange;
