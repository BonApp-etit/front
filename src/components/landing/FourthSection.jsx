import React, { useEffect, useRef } from 'react';
import TarjetasTerceras from './ThirdCards';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const infoComments = [
  {
    name: 'Jessica',
    review: 'Esta aplicación ha cambiado la forma en que pido comida. Es tan fácil de usar y el proceso es facil.',
  },
  {
    name: 'Mario',
    review: 'Me encanta lo simple que es pedir desde mi restaurante favorito. 10/10',
  },
  {
    name: 'Laura',
    review: 'La experiencia de pedir comida nunca ha sido tan sencilla. La interfaz es amigable',
  },
];

export default function Fourth() {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
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

    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  return (
    <section className="bg-white py-12 px-4">
      {/* Título Principal */}
      <div className="text-center mb-12">
        <h2 className="text-[48px] font-bold text-black font-poppins">
          ¿Qué dicen nuestros <br /> clientes de nosotros?
        </h2>
      </div>

      {/* Swiper para los comentarios */}
      <div ref={swiperContainerRef} className="swiper-container mx-auto sm:mx-8 md:mx-16 lg:mx-[120px]">
        <div className="swiper-wrapper">
          {infoComments.map((info, index) => (
            <div key={index} className="swiper-slide">
              <TarjetasTerceras review={info.review} name={info.name} />
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
}
