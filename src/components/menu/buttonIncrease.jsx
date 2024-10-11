import React, { useState } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

export default function CounterButton() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #FF441F",
        padding: 0.5,
        width: "60px",
        borderRadius: "8px",
      }}
    >
      <IconButton
        variant="text"
        onClick={handleIncrement}
        color="secondary"
        sx={{
          minWidth: "auto",
          padding: "0",
        }}
      >
        <Add fontSize="small" sx={{ strokeWidth: 1, stroke: "currentColor" }} />
      </IconButton>

      <Typography variant="h6" sx={{ color: "333", fontSize: "10px" }}>
        {count}
      </Typography>
      <IconButton
        color="secondary"
        onClick={handleDecrement}
        sx={{ minWidth: "auto", padding: "0" }}
      >
        <Remove
          fontSize="small"
          sx={{ strokeWidth: 1, stroke: "currentColor" }}
        />
      </IconButton>
    </Box>
  );
}
