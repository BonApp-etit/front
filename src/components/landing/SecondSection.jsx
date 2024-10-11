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
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const swiper = new Swiper(swiperContainerRef.current, {
      slidesPerView: 1,
      spaceBetween: 30,
      initialSlide: 1,
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
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.7,
          initialSlide: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2.5,
          initialSlide: 1,
          spaceBetween: 20,
          centeredSlides: true,
          loop: false,
        },
      },
    });

    setSwiperInstance(swiper); // Guardar la instancia de Swiper

    return () => {
      swiper.destroy(); // Limpiar la instancia al desmontar
    };
  }, []);

  return (
    <section className="bg-white mt-[40px] lg:mx-[120px]">
      {/* Título Principal */}
      <div className="text-center mb-8">
        <p className="mb-4 text-[#FF441F] text-[16px] font-poppins">QUE HACEMOS</p>
        <h2 className="text-[24px] font-bold text-black font-poppins md:text-[32px] lg:text-[30px] xxl:text-[48px]">
          Facilitamos el proceso de ordenar comida en <br /> restaurantes.
        </h2>
        <p className="text-[16px] mt-4 text-gray-500 font-roboto">
          Hacemos que tus usuarios seleccionen sus platos favoritos y realicen
          sus pedidos de manera rápida y sencilla.
        </p>
      </div>

      {/* Swiper para las tarjetas */}
      <div ref={swiperContainerRef} className="swiper-container">
        <div className="swiper-wrapper">
          {tarjetasData.map((tarjeta, index) => (
            <div key={index} className="swiper-slide">
              <TarjetasPrimeras texto={tarjeta.texto} src={tarjeta.src} />
            </div>
          ))}
        </div>

       <div className="swiper-button-next"></div>
       <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
};

export default Second;
