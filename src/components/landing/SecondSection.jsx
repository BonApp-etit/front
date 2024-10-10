import React, { useEffect, useRef, useState } from 'react';
import TarjetasPrimeras from './FirstCard';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const tarjetasData = [
  { texto: "Recetas de calidad", src: "/assets/secondFirst.svg" },
  { texto: "Entrega rápida", src: "/assets/secondSecond.svg" },
  { texto: "Sabor garantizado", src: "/assets/secondThird.svg" },
];

const Second = () => {
  const swiperContainerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let swiper = null;

    if (!isDesktop) {
      swiper = new Swiper(swiperContainerRef.current, {
        slidesPerView: 1, // Ajuste para pantallas pequeñas
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
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 400,
          },
        },
      });
    }

    return () => {
      if (swiper) swiper.destroy();
    };
  }, [isDesktop]);

  return (
    <section className="bg-white py-12 px-4 font-sans">
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

      {/* Contenedor Swiper para móviles */}
      <div
        ref={swiperContainerRef}
        className={`swiper-container ${isDesktop ? 'hidden' : ''}`}
      >
        <div className="swiper-wrapper">
          {tarjetasData.map((tarjeta, index) => (
            <div key={index} className="swiper-slide w-[340px] ml-[120px]">
              <TarjetasPrimeras texto={tarjeta.texto} src={tarjeta.src} />
            </div>
          ))}
        </div>
      </div>

      {/* Tarjetas estáticas para desktop */}
      {isDesktop && (
        <div className="flex flex-row justify-center">
          {tarjetasData.map((tarjeta, index) => (
            <div key={index} className="flex mx-[80px]">
              <TarjetasPrimeras texto={tarjeta.texto} src={tarjeta.src} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Second;
