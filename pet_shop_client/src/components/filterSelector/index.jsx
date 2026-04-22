import { Select, MenuItem, FormControl, styled } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { useDispatch, useSelector } from "react-redux";
import { setSortedType } from "../../redux/slices/homeSlice";

const CustomSelect = styled(Select)(() => ({
  background: "transparent",
  color: "#282828",
  borderRadius: "6px",
  minWidth: "200px",

  "& .MuiSelect-select": {
    padding: "10px 14px",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#DDDDDD",
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#DDDDDD",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#DDDDDD",
  },

  "& .MuiSelect-icon": {
    right: 14,
    color: "#282828",
    transition: "transform 0.2s ease",
  },

  "& .MuiSelect-iconOpen": {
    transform: "rotate(180deg)",
  },
}));

function FilterSelector() {
  const { sortedType } = useSelector((state) => state.homeSlice);
  const dispatch = useDispatch();

  return (
    <FormControl>
      <CustomSelect
        value={sortedType}
        onChange={(e) => dispatch(setSortedType(e.target.value))}
        IconComponent={KeyboardArrowDownSharpIcon}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "white",
              borderRadius: "6px",
              mt: 1,
              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
            },
          },
        }}
      >
        <MenuItem value="default">by default</MenuItem>
        <MenuItem value="high">price: high-low</MenuItem>
        <MenuItem value="low">price: low-high</MenuItem>
      </CustomSelect>
    </FormControl>
  );
}

export default FilterSelector;
