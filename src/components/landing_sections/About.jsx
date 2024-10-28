import React from "react";
import TarjetasPrimeras from "./FirstCard";

const tarjetasData = [
  { texto: "Recetas de calidad", src: "/assets/secondFirst.svg" },
  { texto: "Entrega rápida", src: "/assets/secondSecond.svg" },
  { texto: "Sabor garantizado", src: "/assets/secondThird.svg" },
];

const AboutSection = () => {
  return (
    <section className="bg-white px-4 py-12 font-sans">
      {/* Título Principal */}
      <div className="mb-8 text-center">
        <p className="mb-4 font-poppins text-[#FF441F]">QUE HACEMOS</p>
        <h2 className="font-poppins text-[48px] font-bold text-black">
          Facilitamos el proceso de ordenar comida en <br /> restaurantes.
        </h2>
        <p className="mt-4 font-poppins text-[16px] text-gray-500">
          Hacemos que tus usuarios seleccionen sus platos favoritos y realicen
          sus pedidos de manera rápida y sencilla.
        </p>
      </div>

      {/* Sección de Iconos */}
      <div className="mx-[120px] grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Recetas de Calidad */}
        {tarjetasData.map((tarjeta, index) => (
          <TarjetasPrimeras
            key={index}
            texto={tarjeta.texto}
            src={tarjeta.src}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
