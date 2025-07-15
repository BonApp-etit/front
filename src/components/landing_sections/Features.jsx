import React, { useState, useEffect } from 'react'
import FeaturesCards from './FeaturesCards'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'

const features = [
  {
    image: '/assets/FeaturesCardsImages/QRcode.svg',
    title: 'Codigo QR ',
    description:
      'Deja que tus clientes accedan a tu menu de forma mas rapida y sencilla',
  },
  {
    image: '/assets/FeaturesCardsImages/Credit-card.svg',
    title: 'Procesos de Pago Seguros y Rápidos',
    description:
      'Añade tu método de pago favorito y confirma tu compra en un solo clic.',
  },
  {
    image: '/assets/FeaturesCardsImages/Order.svg',
    title: 'Ordena al Instante',
    description:
      'Deja que tus clientes ordenen sin necesidad de esperar a un mesero.',
  },
  {
    image: '/assets/FeaturesCardsImages/Search.svg',
    title: 'Historial de Pedidos',
    description:
      'Acceso rápido a los pedidos anteriores para facilitar la repetición de favoritos.',
  },
  {
    image: '/assets/FeaturesCardsImages/Notifications.svg',
    title: 'Notificaciones en Tiempo Real',
    description:
      'Los clientes reciben actualizaciones sobre el estado de su pedido.',
  },
  {
    image: '/assets/FeaturesCardsImages/Drop-down.svg',
    title: 'Menú Digital',
    description:
      'Un menú accesible desde la app, con descripciones claras de cada plato.',
  },
]

export default function Features() {
  return (
    <>
      <section className="bg-white" id="Servicios">
        {/* Título Principal */}

        <h2 className="mx-auto mb-8 text-center font-poppins text-2xl font-bold text-black md:text-3xl md:leading-10 lg:text-5xl lg:leading-[63px]">
          Funciones destacadas que facilitan tu experiencia
        </h2>

        {/* Sección de Tarjetas */}

        <div className="mx-auto hidden w-full grid-cols-3 gap-3 xl:grid">
          {features.map((feature, index) => (
            <FeaturesCards
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mx-auto block sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:hidden">
          <Swiper
            loop={true}
            spaceBetween={10}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
          >
            {features.map((feature, index) => (
              <SwiperSlide className="w-fit" key={index}>
                <FeaturesCards
                  image={feature.image}
                  title={feature.title}
                  description={feature.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}
