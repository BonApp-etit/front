import { createTheme } from "@mui/material/styles";

// Plano
const theme = createTheme({
  palette: {
    primary: {
      light: "#ffc2a8",
      main: "#ff441f",
      dark: "#c71007",
      contrastText: "#FFFFFF", // Texto en blanco sobre el color primario
      //main: "#ff441f", // Naranja principal ---Default 500
      //
    },
    // Outlined
    secondary: {
      main: "#ff441f", // Naranja outlined  ---- Default
      contrastText: "#FFFFFF", // Texto en blanco sobre el color secundario
    },
    background: {
      default: "#FFFFFF", // Color de fondo predeterminado
      paper: "#FFFFFF", // Color de fondo de los componentes tipo "paper"
    },
    text: {
      primary: "#000000", // Color de texto principal
      secondary: "#000000", // Color de texto secundario
      disabled: "#ff6037", // 400
    },

    action: {
      hover: "#f01d06",
      selected: "#c71007",
      disabledBackground: "#ffe2d4",
      disabled: "#ff6037",
    },
  },
  typography: {
    button: {
      textTransform: "none", // Evitar mayúsculas automáticas en botones
      fontWeight: 500,
    },
  },

  breakpoints: {
    values: {
      xs: 0, // Extra pequeño
      sm: 600, // Pequeño
      md: 700, // Mediano
      lg: 1200, // Grande
      xl: 1920, // Extra grande
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "0.75rem",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          textTransform: "none",
          padding: "8px 12px", // Padding del botón (puede ser personalizado)
          borderRadius: "8px", // Radio de borde redondeado
          border: "none", // Eliminar bordes predeterminados
          cursor: "pointer",
          transition: "background-color 0.3s ease", // Transición suave para hover
          "&:hover": {
            backgroundColor: theme.palette.action.hover, // Color de hover (personalizable)
          },
          "&:active": {
            backgroundColor: theme.palette.action.selected, // Color de hover (personalizable)
          },
          "&:disabled": {
            backgroundColor: theme.palette.action.disabledBackground, // Color de fondo deshabilitado
            cursor: "not-allowed",
          },
        }),
      },
    },
  },
});

export default theme;
