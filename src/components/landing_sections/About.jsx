import React from 'react'
import AboutCards from './AboutCards'

const AboutSection = () => {
  return (
    <section className="bg-white py-12" id="Beneficios">
      {/* Título Principal */}
      <div className="mb-8 flex flex-col items-center text-center">
        <p className="mb-2 font-poppins text-base font-semibold text-[#d52100]">
          QUE HACEMOS
        </p>

        <h2 className="font-poppins text-2xl font-bold text-black md:text-[32px] lg:text-5xl">
          Facilitamos el proceso de ordenar comida en restaurantes.
        </h2>

        <p className="mt-4 font-roboto text-base font-normal text-[#3f3d56]">
          Hacemos que tus usuarios seleccionen sus platos favoritos y realicen
          sus pedidos de manera rápida y sencilla.
        </p>
      </div>

      {/* Sección de Iconos */}
      <div>
        <AboutCards />
      </div>
    </section>
  )
}

export default AboutSection
