import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 4,

    // border: `2px solid ${theme.palette.background.paper}`,

    // padding: "0 4px",
  },
  "& .MuiSvgIcon-root": {
    color: "#9E0F0E",
  },
}));

export default function Cart() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon color="#" />
      </StyledBadge>
    </IconButton>
  );
}
