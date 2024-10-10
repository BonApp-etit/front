import React, { useEffect, useRef } from 'react';
import TarjetasPrimeras from './FirstCard';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const tarjetasData = [
  { texto: "Recetas de calidad", src: "/assets/secondFirst.svg" },
  { texto: "Entrega rápida", src: "/assets/secondSecond.svg" },
  { texto: "Sabor garantizado", src: "/assets/secondThird.svg" },
];

const Second = () => {
  const swiperContainerRef = useRef(null); // referencia para el contenedor de Swiper

  useEffect(() => {
    // Inicializar Swiper cuando el componente esté montado
    const swiper = new Swiper(swiperContainerRef.current, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // Cambia el número de slides según el ancho de la pantalla
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });

    // Limpieza de Swiper cuando el componente se desmonte
    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  return (
    <section className="bg-white py-12 px-4 font-sans">
      {/* Título Principal */}
      <div className="text-center mb-8">
        <p className="mb-4 text-[#FF441F] font-poppins">QUE HACEMOS</p>
        <h2 className="text-[48px] font-bold text-black font-poppins">
          Facilitamos el proceso de ordenar comida en <br /> restaurantes.
        </h2>
        <p className="text-[16px] mt-4 text-gray-500 font-poppins">
          Hacemos que tus usuarios seleccionen sus platos favoritos y realicen
          sus pedidos de manera rápida y sencilla.
        </p>
      </div>

      {/* Contenedor Swiper */}
      <div ref={swiperContainerRef} className="swiper-container">
        <div className="swiper-wrapper">
          {/* Renderizar las tarjetas dentro del Swiper */}
          {tarjetasData.map((tarjeta, index) => (
            <div key={index} className="swiper-slide">
              <TarjetasPrimeras texto={tarjeta.texto} src={tarjeta.src} />
            </div>
          ))}
        </div>
        {/* Paginación y botones de navegación */}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
};

export default Second;
