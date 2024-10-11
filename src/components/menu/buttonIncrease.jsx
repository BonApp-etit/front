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
        padding: { xs: 0.5, sm: 0.5, md: "7px 6px", lg: "8px 8px" },
        width: { xs: "60px", sm: "60px", md: "80px", lg: "91px" },
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
        <Add
          sx={{
            strokeWidth: 1,
            stroke: "currentColor",
            fontSize: { xs: "10px", sm: "10px", md: "12px", lg: "20px" },
          }}
        />
      </IconButton>

      <Typography
        variant="h6"
        sx={{
          color: "333",
          fontSize: { xs: "10px", sm: "10px", md: "12px", lg: "16px" },
        }}
      >
        {count}
      </Typography>
      <IconButton
        color="secondary"
        onClick={handleDecrement}
        sx={{ minWidth: "auto", padding: "0" }}
      >
        <Remove
          sx={{
            strokeWidth: 1,
            stroke: "currentColor",
            fontSize: { xs: "10px", sm: "10px", md: "12px", lg: "20px" },
          }}
        />
      </IconButton>
    </Box>
  );
}
