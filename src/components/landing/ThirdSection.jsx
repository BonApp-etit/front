import React, { useEffect, useRef, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Si la pantalla es menor que 1024px, estamos en mobile
    };

    handleResize(); // Ejecutar al cargar la página

    window.addEventListener('resize', handleResize); // Añadir listener de cambio de tamaño

    return () => {
      window.removeEventListener('resize', handleResize); // Limpiar el listener
    };
  }, []);

  useEffect(() => {
    let swiper;

    if (isMobile) {
      swiper = new Swiper(swiperContainerRef.current, {
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
        },
      });
    }

    return () => {
      if (swiper) swiper.destroy();
    };
  }, [isMobile]);

  return (
    <section className="bg-white py-12 px-4">
      {/* Título Principal */}
      <div className="text-center mb-8">
        <h2 className="text-[48px] font-bold text-black font-poppins">
          Funciones destacadas que facilitan tu <br /> experiencia
        </h2>
      </div>

      {/* Swiper para mobile o vista normal en desktop */}
      {isMobile ? (
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
          
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-[120px]">
          {features.map((feature, index) => (
            <TarjetasSegundas
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      )}
    </section>
  );
}

