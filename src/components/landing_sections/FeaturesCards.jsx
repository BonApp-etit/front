import React from "react";
import Image from "next/image";

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="flex justify-center">
      <div className="relative mb-4 h-[280px] w-[220px] rounded-[20px] bg-white px-3 shadow-lg">
        {/* Esquina de la tarjeta */}
        <div className="absolute right-0 top-0 h-[38px] w-[43px] rounded-bl-[21px] rounded-tr-[19px] bg-cs500"></div>

        {/* Imagen */}
        <div className="mx-auto mb-2 mt-5 w-[150px]">
          <Image
            src={image}
            alt={title}
            width={223}
            height={262}
            layout="responsive"
          />
        </div>

        {/* Contenedor para centrar título y descripción */}
        <div className="flex flex-col items-center gap-2">
          {/* Título */}
          <h3 className="text-center font-poppins text-base font-semibold text-black">
            {title}
          </h3>

          {/* Descripción */}
          <p className="mb-3 text-center font-roboto text-[11px] font-semibold leading-tight text-[#555555]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
