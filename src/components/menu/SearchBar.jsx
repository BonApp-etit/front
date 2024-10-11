import React, { useState } from "react";
import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleSearchClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Box className="relative flex items-center">
      {/* Botón con ícono de búsqueda */}
      <IconButton
        onClick={handleSearchClick}
        sx={{
          color: "primary.main",
          transition: "all 0.3s ease",
          border: "1px solid",
          borderRadius: "4px",
          borderColor: "primary.main",
          padding: "4px",
        }}
      >
        <SearchIcon />
      </IconButton>

      {/* Input de búsqueda, colapsado o expandido */}
      <InputBase
        placeholder="Buscar..."
        sx={{
          width: expanded ? { xs: "150px", md: "200px" } : "0px", // Tamaño dinámico
          opacity: expanded ? 1 : 0, // Animación de aparición
          transition: "all 0.3s ease", // Transición suave
          paddingLeft: expanded ? "8px" : "0px", // Espaciado en expansión
          backgroundColor: "#fff3ed",
          borderRadius: "4px",
          fontFamily: "Ubuntu, sans-serif",
          border: "1px solid",
          borderRadius: "4px",
          borderColor: "primary.main",
        }}
        className={` h-full text-black ${expanded ? "visible" : "invisible"}`}
      />
    </Box>
  );
};

export default SearchBar;
