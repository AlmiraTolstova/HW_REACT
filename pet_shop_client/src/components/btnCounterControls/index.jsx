import React from "react";
import { Box, Button, ButtonGroup } from "@mui/material";

function BtnCounterControls({ count, onMinus, onPlus, disabled }) {
  return (
    <ButtonGroup
      variant="outlined"
      sx={{
        width: "200px",
        height: "58px",
        borderRadius: "6px",
        overflow: "hidden",

        "& .MuiButton-root": {
          flex: 1, //делит ширину равномерно
          height: "58px",
          fontSize: 20,
          color: "#8B8B8B",
          borderColor: "#DDDDDD",
          minWidth: 0, //убирает дефолтный minWidth MUI
        },
      }}
    >
      <Button
        onClick={onMinus}
        disabled={disabled}
        sx={{
          backgroundColor: "#fff",
          "&:hover": { backgroundColor: "#e9e5e5" },
        }}
      >
        −
      </Button>

      <Button
        disabled
        sx={{
          backgroundColor: "#fff",
          color: "#282828 !important",
        }}
      >
        {count}
      </Button>

      <Button
        onClick={onPlus}
        disabled={disabled}
        sx={{
          backgroundColor: "#fff",
          "&:hover": { backgroundColor: "#e9e5e5" },
        }}
      >
        +
      </Button>
    </ButtonGroup>
  );
}

export default BtnCounterControls;
