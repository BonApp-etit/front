import { styled } from "@mui/material/styles";
import { ButtonGroup } from "@mui/material";

const ButtonGroupCustomized = styled(ButtonGroup)(({ theme }) => ({
  "& .MuiButton-root": {
    fontSize: "16px",
    fonWeight: "600",
    color: theme.palette.secondary.dark, // Color del texto de los botones
    borderColor: theme.palette.primary.main, // Asegura que el borde del botón tenga el mismo color que el grupo
    borderWidth: "1px",

    "&:hover": {
      backgroundColor: "#ffe2d4", // Color de fondo al hacer hover
      borderColor: theme.palette.primary.main, // Mantiene el color del borde en hover
      color: theme.palette.primary.main, // Mantiene el color del texto en hover
    },
  },
}));

export default ButtonGroupCustomized;
