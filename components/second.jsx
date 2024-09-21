import React from 'react';
import TarjetasPrimeras from '../components/TarjetasPrimeras'

const tarjetasData = [
  { texto: "Recetas de calidad", src: "/assets/secondFirst.svg" },
  { texto: "Entrega rápida", src: "/assets/secondSecond.svg" },
  { texto: "Sabor garantizado", src: "/assets/secondThird.svg" },
];

const second = () => {
  return (
    <section className="bg-white py-12 px-4 font-sans">
      {/* Título Principal */}
      <div className="text-center mb-8">
        <p className='mb-4 text-[#FF441F]'>
            Que hacemos
        </p>
        <h2 className="text-4xl font-bold text-black">Facilitamos el proceso de ordenar comida en <br></br>restaurantes.</h2>
        <p className="mt-4 text-gray-500">
          Hacemos que tus usuarios seleccionen sus platos favoritos y realicen sus pedidos de manera rápida y sencilla.
        </p>
      </div>

      {/* Sección de Iconos */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Recetas de Calidad */}
          {tarjetasData.map((tarjeta, index) => (
             <TarjetasPrimeras key={index} texto={tarjeta.texto} src={tarjeta.src} />
          ))}
      </div>
    </section>
  );
};

export default second;
