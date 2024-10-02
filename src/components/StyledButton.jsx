import React from "react";
import { styled } from "@mui/system";

// Crear el botón utilizando Tailwind y Material UI styled
const CustomStyledButton = styled("button")(
  ({ bgColor, hoverColor, textColor, padding, borderRadius, theme }) => ({
    backgroundColor: bgColor || theme.palette.primary.main, // Color de fondo (con opción a personalizar)
    color: textColor || theme.palette.primary.contrastText, // Color del texto
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    fontSize: "0.75rem",
    padding: padding || "8px 12px", // Padding del botón (puede ser personalizado)
    borderRadius: borderRadius || "8px", // Radio de borde redondeado
    border: "none", // Eliminar bordes predeterminados
    cursor: "pointer",
    fontSize: "12px",
    transition: "background-color 0.3s ease", // Transición suave para hover
    "&:hover": {
      backgroundColor: hoverColor || theme.palette.primary.hover, // Color de hover (personalizable)
    },
    "&:active": {
      backgroundColor: hoverColor || theme.palette.primary.active, // Color de hover (personalizable)
    },
    "&:disabled": {
      backgroundColor: "#9CA3AF", // Color de fondo deshabilitado
      cursor: "not-allowed",
    },
  })
);

// Botón funcional con clases Tailwind adicionales
const StyledButton = ({
  text,
  onClick,
  bgColor,
  hoverColor,
  textColor,
  padding,
  borderRadius,
  disabled,
  tailwindClasses,
}) => {
  return (
    <CustomStyledButton
      className={[tailwindClasses, "h-4 text-xs"]}
      onClick={onClick}
      bgColor={bgColor}
      hoverColor={hoverColor}
      textColor={textColor}
      padding={padding}
      borderRadius={borderRadius}
      disabled={disabled}
    >
      {text}
    </CustomStyledButton>
  );
};

export default StyledButton;
