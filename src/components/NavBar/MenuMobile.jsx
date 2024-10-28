import { IconButton, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export default function MenuMobile({ items }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="lg:hidden">
      <IconButton onClick={handleMenuOpen}>
        <Image
          width={24}
          height={24}
          src="/assets/NavBar/menuMobile.svg"
          alt="Logo"
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            sx: { width: "150px", padding: "4px" }, // Estilos personalizados para el menú flotante
            elevation: 3, // Sombra del menú
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {items.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleMenuClose}
            component="a"
            href={`#${item}`}
            className="hover:bg-cs50 hover:text-cs500 active:bg-cs100"
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
