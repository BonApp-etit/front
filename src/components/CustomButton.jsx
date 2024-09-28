import React from 'react';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material'; // Asegúrate de tener `@mui/icons-material` instalado

const CustomButton = ({text, uppercase, fontFamily, tailwindClasses, props}) => {
  const handleClick = () => {
    alert('¡Botón clickeado!');
  };

  return (
    <Button
      variant="contained"           // Estilo del botón
      color="secondary"               // Color del botón
      size="large"                  // Tamaño del botón
      startIcon={<Add />}           // Icono al inicio
      onClick={handleClick}         // Maneja el evento de clic
      fullWidth                     // Ocupa todo el ancho
      sx={{ color:'white',
        textTransform: uppercase ? 'uppercase' : 'none',
        '&:hover': {
          backgroundColor: '#f01d06',
        },
        fontFamily:fontFamily || 'Arial' // Estilo adicional  TODO: Agregar fuente poppins para usarla no solo con tailwind
       }}    
       className={tailwindClasses} // Aplica clases de Tailwind
       {...props} // Permite pasar otras propiedades
    >
      {text}
    </Button>
  );
};

export default CustomButton;