import React from 'react';

const FeatureCard = ({ image, title, description }) => {
    return (
      <div className="bg-white rounded-[42px] shadow-lg p-6 relative w-[223px] h-[260px] xxl:w-[370px] xxl:h-[495px]">
        {/* Esquina de la tarjeta */}
        <div className="absolute top-0 right-0 bg-[#FF441F] w-[43px] h-[37px] rounded-bl-[42px] rounded-tr-[42px]"></div>
        
        {/* Imagen */}
        <div className=" mb-[1px] flex justify-center">
          <img src={image} alt={title} className="h-[175px] w-[185px] xxl:w-[255px] xxl:h-[280px]" />
        </div>
  
        {/* Contenedor para centrar título y descripción */}
        <div className="flex flex-col items-center">
          {/* Título */}
          <h3 className="text-[15px] font-semibold text-gray-800 mb-[8px] text-center font-poppins xxl:text-[24px]">{title}</h3>
          
          {/* Descripción */}
          <p className="text-gray-600 text-center text-[11px] font-roboto xxl:text-[18px]">{description}</p>
        </div>
      </div>
    );
  };
  

export default FeatureCard;