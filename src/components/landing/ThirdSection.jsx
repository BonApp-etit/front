import React, { useEffect, useRef, useState } from 'react';
import TarjetasSegundas from './SecondCard';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const features = [
  {
    image: '/assets/thirdFirst.svg',
    title: 'Codigo QR',
    description: 'Deja que tus clientes accedan a tu menu de la forma más rápida y sencilla.'
  },
  {
    image: '/assets/thirdSecond.svg',
    title: 'Procesos de Pago Seguros y Rápidos',
    description: 'Añade tu método de pago favorito y confirma tu compra en un solo clic.'
  },
  {
    image: '/assets/thirdThird.svg',
    title: 'Ordena al Instante',
    description: 'Deja que tus clientes ordenen sin necesidad de esperar a un mesero.'
  },
  {
    image: '/assets/thirdFourth.svg',
    title: 'Historial de Pedidos',
    description: 'Acceso rápido a los pedidos anteriores para facilitar la repetición de favoritos.'
  },
  {
    image: '/assets/thirdFive.svg',
    title: 'Notificaciones en Tiempo Real',
    description: 'Los clientes reciben actualizaciones sobre el estado de su pedido.'
  },
  {
    image: '/assets/thirdSix.svg',
    title: 'Menú Digital',
    description: 'Un menú accesible desde la app, con descripciones claras de cada plato.'
  }
];

export default function Third() {
  const swiperContainerRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const swiper = new Swiper(swiperContainerRef.current, {
      slidesPerView: 1, // 1 tarjeta por vista en pantallas pequeñas
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
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2, // 2 tarjetas en pantallas medianas
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3, // 3 tarjetas en pantallas grandes
          spaceBetween: 30,
        },
      },
    });

    setSwiperInstance(swiper); // Guardar la instancia de Swiper

    return () => {
      swiper.destroy(); // Limpiar la instancia al desmontar
    };
  }, []);

  return (
    <section className="mt-[45px]">
      {/* Título Principal */}
      <div className="text-center mb-8">
        <h2 className="text-[24px] font-bold text-black font-poppins">
          Funciones destacadas que facilitan tu <br /> experiencia
        </h2>
      </div>

      <div ref={swiperContainerRef} className="swiper-container">
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

        {/* Paginación de Swiper */}
        <div className="swiper-pagination"></div>

        {/* Botones de navegación de Swiper */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
}
