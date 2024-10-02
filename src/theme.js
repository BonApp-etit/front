import { createTheme } from "@mui/material/styles";

// Plano
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff441f", // Naranja principal ---Default
      hover: "#f01d06", // Naranja claro --- Hover
      active: "#c71007", // Naranja Oscuro --- Active
      diseabled: "#ffe2d4",
      diseabledText: "#ff6037",
      contrastText: "#FFFFFF", // Texto en blanco sobre el color primario
    },
    // Outlined
    secondary: {
      main: "#ff441f", // Naranja outlined  ---- Default
      hover: "#c71007", // Naranja outlined ---- Hover
      active: "#9e0f0e", // Naranja  ------ Active
      diseabled: "#ffc2a8", // Diseabled
      diseabledText: "#ffc2a8", // Text diseabled
      contrastText: "#FFFFFF", // Texto en blanco sobre el color secundario
    },
    background: {
      default: "#FFFFFF", // Color de fondo predeterminado
      paper: "#FFFFFF", // Color de fondo de los componentes tipo "paper"
    },
    text: {
      primary: "#000000", // Color de texto principal
      secondary: "#757575", // Color de texto secundario
    },
  },
});

export default theme;
