import React from 'react';
import { Button } from '@mui/material';
import { Add, ArrowForward} from '@mui/icons-material'; // Asegúrate de tener `@mui/icons-material` instalado

const CustomButton = ({text, uppercase, fontFamily, tailwindClasses, size, props}) => {
  const handleClick = () => {
    alert('¡Botón clickeado!');
  };

  return (
    <Button
      variant="contained"           // Estilo del botón
      // color="primary"               // Color del botón // Configurado desde _app.js Discutir si usar la configuracion de Material UI o Tailwind
      size = {size ? size : 'medium' }                  // Tamaño del botón
      //endIcon={<ArrowForward />}   // Icono al inicio
      onClick={handleClick}         // Maneja el evento de clic
                     
      sx={{ 
        height:'34px',
        fontSize: '12px',
        fontWeight: '900',
        padding:'8px 12px',
        color:'white',
        textTransform: uppercase ? 'uppercase' : 'none',
        '&:hover': {
          backgroundColor: '#secondary',
        },
        fontFamily:fontFamily || 'Arial' // Estilo adicional  
       }}    
       className={tailwindClasses} // Aplica clases de Tailwind
       {...props} // Permite pasar otras propiedades
    >
      {text}
    </Button>
  );
};

export default CustomButton;