import React, { useEffect, useRef } from 'react';
import TarjetasSegundas from './SecondCard';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const features = [
  {
    image: '/assets/thirdFirst.svg',
    title: 'Código QR',
    description: 'Deja que tus clientes accedan a tu menú de la forma más rápida y sencilla.',
  },
  {
    image: '/assets/thirdSecond.svg',
    title: 'Procesos de Pago Seguros y Rápidos',
    description: 'Añade tu método de pago favorito y confirma tu compra en un solo clic.',
  },
  {
    image: '/assets/thirdThird.svg',
    title: 'Ordena al Instante',
    description: 'Deja que tus clientes ordenen sin necesidad de esperar a un mesero.',
  },
  {
    image: '/assets/thirdFourth.svg',
    title: 'Historial de Pedidos',
    description: 'Acceso rápido a los pedidos anteriores para facilitar la repetición de favoritos.',
  },
  {
    image: '/assets/thirdFive.svg',
    title: 'Notificaciones en Tiempo Real',
    description: 'Los clientes reciben actualizaciones sobre el estado de su pedido.',
  },
  {
    image: '/assets/thirdSix.svg',
    title: 'Menú Digital',
    description: 'Un menú accesible desde la app, con descripciones claras de cada plato.',
  },
];

export default function Third() {
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
    <>
      <section className="bg-white py-12 px-4">
        {/* Título Principal */}
        <div className="text-center mb-8">
          <h2 className="text-[48px] font-bold text-black font-poppins">
            Funciones destacadas que facilitan tu <br /> experiencia
          </h2>
        </div>

        {/* Swiper para las tarjetas */}
        <div ref={swiperContainerRef} className="swiper-container mx-[120px]">
          <div className="swiper-wrapper">
            {features.map((feature, index) => (
              <div key={index} className="swiper-slide">
                <TarjetasSegundas
                  image={feature.image}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>

          {/* Paginación y botones de navegación */}
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>
    </>
  );
}
