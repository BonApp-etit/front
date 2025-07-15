import React from 'react'
import { Button } from '@mui/material'
import { Add, ArrowForward } from '@mui/icons-material' // Asegúrate de tener `@mui/icons-material` instalado

const CustomButton = ({
  text,
  uppercase,
  tailwindClasses,
  type,
  size,
  onClick,
  props,
}) => {
  return (
    <Button
      variant="outlined" // Estilo del botón
      size={size ? size : 'medium'} // Tamaño del botón
      type={type}
      //endIcon={<ArrowForward />}   // Icono al inicio
      onClick={onClick} // Maneja el evento de clic
      sx={{
        textTransform: 'none',
      }}
      className={[
        tailwindClasses,
        'h-4, bg-cs500 px-3 py-2 font-poppins text-xs font-medium text-white hover:bg-cs600',
      ]} // Aplica clases de Tailwind
      {...props} // Permite pasar otras propiedades
    >
      {text}
    </Button>
  )
}

export default CustomButton
