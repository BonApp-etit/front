import React, { useEffect, useRef, useState } from 'react';
import TarjetasTerceras from './ThirdCards';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const infoComments = [
  {
    name: 'Jessica',
    review: 'Esta aplicación ha cambiado la forma en que pido comida. Es tan fácil de usar y el proceso es fácil.'
  },
  {
    name: 'Mario',
    review: 'Me encanta lo simple que es pedir desde mi restaurante favorito. 10/10'
  },
  {
    name: 'Laura',
    review: 'La experiencia de pedir comida nunca ha sido tan sencilla. La interfaz es amigable.'
  }
];

export default function Fourth() {
  const swiperContainerRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const swiper = new Swiper(swiperContainerRef.current, {
      slidesPerView: 1.15, // Mostramos 1 tarjeta por vista en pantallas pequeñas
      spaceBetween: 100, // Reduce espacio entre tarjetas
      initialSlide: 1, 
      centeredSlides: true,
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
          spaceBetween: 10, // Espacio entre tarjetas en pantallas pequeñas
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20, // Espacio entre tarjetas en pantallas medianas
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30, // Espacio entre tarjetas en pantallas grandes
        },
      },
    });

    setSwiperInstance(swiper);

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className="bg-white mt-[40px]">
      {/* Título Principal */}
      <div className="text-center">
        <h2 className="text-[24px] font-bold text-black font-poppins mb-[34px] md:text-[32px]">
          ¿Qué dicen nuestros <br /> clientes de nosotros?
        </h2>
      </div>

      {/* Swiper para las Tarjetas Terceras */}
      <div ref={swiperContainerRef} className="swiper-container">
        <div className="swiper-wrapper">
          {infoComments.map((info, index) => (
            <div key={index} className="swiper-slide">
              <TarjetasTerceras
                review={info.review}
                name={info.name}
              />
            </div>
          ))}
        </div>

         



      </div>
    </section>
  );
}
