import React, { useState, useEffect } from "react";
import FeaturesCards from "./FeaturesCards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const features = [
  {
    image: "/assets/FeaturesCardsImages/QRcode.svg",
    title: "Codigo QR ",
    description:
      "Deja que tus clientes accedan a tu menu de forma mas rapida y sencilla",
  },
  {
    image: "/assets/FeaturesCardsImages/Credit-card.svg",
    title: "Procesos de Pago Seguros y Rápidos",
    description:
      "Añade tu método de pago favorito y confirma tu compra en un solo clic.",
  },
  {
    image: "/assets/FeaturesCardsImages/Order.svg",
    title: "Ordena al Instante",
    description:
      "Deja que tus clientes ordenen sin necesidad de esperar a un mesero.",
  },
  {
    image: "/assets/FeaturesCardsImages/Search.svg",
    title: "Historial de Pedidos",
    description:
      "Acceso rápido a los pedidos anteriores para facilitar la repetición de favoritos.",
  },
  {
    image: "/assets/FeaturesCardsImages/Notifications.svg",
    title: "Notificaciones en Tiempo Real",
    description:
      "Los clientes reciben actualizaciones sobre el estado de su pedido.",
  },
  {
    image: "/assets/FeaturesCardsImages/Drop-down.svg",
    title: "Menú Digital",
    description:
      "Un menú accesible desde la app, con descripciones claras de cada plato.",
  },
];

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isDesktop;
};

export default function Features() {
  const isDesktop = useIsDesktop();
  return (
    <>
      <section className="bg-white px-4">
        {/* Título Principal */}

        <div className="mb-8 text-center">
          <h2 className="font-poppins text-2xl font-bold text-black md:text-3xl md:leading-10 lg:text-5xl lg:leading-[63px]">
            Funciones destacadas que facilitan tu experiencia
          </h2>
        </div>

        {/* Sección de Tarjetas */}
        <div className="">
          {isDesktop ? (
            // Diseño de 3x3 para desktop usando grid
            <div className="flex justify-center">
              <div className="grid w-[1200px] grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <FeaturesCards
                    key={index}
                    image={feature.image}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Swiper para mobile y tablet
            <Swiper
              pagination={{ clickable: true }}
              breakpoints={{
                360: {
                  slidesPerView: 1.4,
                  centeredSlides: true,
                  spaceBetween: 20,
                },
                744: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 390,
                  centeredSlides: false,
                },
              }}
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index}>
                  <FeaturesCards
                    image={feature.image}
                    title={feature.title}
                    description={feature.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
    </>
  );
}