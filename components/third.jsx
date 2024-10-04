import React from 'react';
import TarjetasSegundas from '../components/TarjetasSegundas';

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

export default function Third(){
    
  return (
    <>
      <section className="bg-white py-12 px-4">
        {/* Título Principal */}
        <div className="text-center mb-8">
          <h2 className="text-[48px] font-bold text-black font-poppins">
            Funciones destacadas que facilitan tu <br /> experiencia
          </h2>
        </div>
  
        {/* Sección de Tarjetas */}
        <div className="mx-[120px] grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <TarjetasSegundas
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