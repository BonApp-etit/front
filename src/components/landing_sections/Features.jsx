import React from "react";
import FeaturesCards from "./FeaturesCards";

const features = [
  {
    image: "/assets/thirdFirst.svg",
    title: "Procesos de Pago Seguros y Rapidos",
    description:
      "Añade tu metodo de pago favorito y confirma tu compra con un solo click",
  },
  // {
  //   image: "/assets/thirdSecond.svg",
  //   title: "Procesos de Pago Seguros y Rápidos",
  //   description:
  //     "Añade tu método de pago favorito y confirma tu compra en un solo clic.",
  // },
  // {
  //   image: "/assets/thirdThird.svg",
  //   title: "Ordena al Instante",
  //   description:
  //     "Deja que tus clientes ordenen sin necesidad de esperar a un mesero.",
  // },
  // {
  //   image: "/assets/thirdFourth.svg",
  //   title: "Historial de Pedidos",
  //   description:
  //     "Acceso rápido a los pedidos anteriores para facilitar la repetición de favoritos.",
  // },
  // {
  //   image: "/assets/thirdFive.svg",
  //   title: "Notificaciones en Tiempo Real",
  //   description:
  //     "Los clientes reciben actualizaciones sobre el estado de su pedido.",
  // },
  // {
  //   image: "/assets/thirdSix.svg",
  //   title: "Menú Digital",
  //   description:
  //     "Un menú accesible desde la app, con descripciones claras de cada plato.",
  // },
];

export default function Features() {
  return (
    <>
      <section className="bg-white px-4 py-12">
        {/* Título Principal */}

        <div className="mb-8 text-center">
          <h2 className="font-poppins text-2xl font-bold text-black">
            Funciones destacadas que facilitan tu experiencia
          </h2>
        </div>

        {/* Sección de Tarjetas */}
        <div className="">
          {features.map((feature, index) => (
            <FeaturesCards
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
