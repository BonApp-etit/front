import React from 'react';

const FeatureCard = ({ image, title, description }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 relative w-full">
        {/* Esquina de la tarjeta */}
        <div className="absolute top-0 right-0 bg-[#FF441F] w-8 h-8 rounded-bl-lg"></div>
        
        {/* Imagen */}
        <div className="mb-4 flex justify-center">
          <img src={image} alt={title} className="h-[250px] w-[px]" />
        </div>
  
        {/* Contenedor para centrar título y descripción */}
        <div className="flex flex-col items-center">
          {/* Título */}
          <h3 className="text-[24px] font-semibold text-gray-800 mb-2 text-center font-poppins">{title}</h3>
          
          {/* Descripción */}
          <p className="text-gray-600 text-center text-[18px] font-roboto">{description}</p>
        </div>
      </div>
    );
  };
  

export default FeatureCard;