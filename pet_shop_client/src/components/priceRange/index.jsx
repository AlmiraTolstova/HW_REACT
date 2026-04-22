import { Box, TextField, Typography, styled } from "@mui/material";

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

      <StyledInput placeholder="from" variant="outlined" />
      <StyledInput placeholder="to" variant="outlined" />
    </Wrapper>
  );
}

export default PriceRange;
