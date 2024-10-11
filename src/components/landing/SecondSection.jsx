import React from 'react';
import TarjetasPrimeras from './FirstCard'

const tarjetasData = [
  { texto: "Recetas de calidad", src: "/assets/secondFirst.svg" },
  { texto: "Entrega rápida", src: "/assets/secondSecond.svg" },
  { texto: "Sabor garantizado", src: "/assets/secondThird.svg" },
];

const second = () => {
  return (
    <section className="bg-white mt-[40px]">
      {/* Título Principal */}
      <div className="text-center mb-8">
        <p className="mb-4 text-[#FF441F] text-[16px] font-poppins">QUE HACEMOS</p>
        <h2 className="text-[24px] font-bold text-black font-poppins">
          Facilitamos el proceso de ordenar comida en <br /> restaurantes.
        </h2>
        <p className="text-[16px] mt-4 text-gray-500 font-roboto">
          Hacemos que tus usuarios seleccionen sus platos favoritos y realicen
          sus pedidos de manera rápida y sencilla.
        </p>
      </div>
  
      {/* Sección de Iconos */}
      <div className="">
        {/* Recetas de Calidad */}
        {tarjetasData.map((tarjeta, index) => (
          <TarjetasPrimeras key={index} texto={tarjeta.texto} src={tarjeta.src} />
        ))}
      </div>
    </section>
  );
  

};

export default second;
