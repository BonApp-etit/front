import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa los estilos básicos de Swiper
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import AboutCard from "./AboutCard";

const tarjetasData = [
  {
    texto: "Recetas de calidad",
    src: "/assets/AboutCardsImages/Quality-recipes.svg",
  },
  { texto: "Facil de usar", src: "/assets/AboutCardsImages/Easy-to-use.svg" },
  {
    texto: "Procesos Faciles",
    src: "/assets/AboutCardsImages/Easy-processes.svg",
  },
];

const AboutCards = () => {
  return (
    <>
      <div className="hidden justify-center lg:flex">
        <div className="flex w-[1200px] justify-between">
          {tarjetasData.map((tarjeta, index) => (
            <div
              key={index}
              className="inline-flex h-[381px] flex-col items-center justify-center gap-[19px] rounded-[30px] border border-[#e7d6d2] bg-[#fffbfa] p-10"
            >
              <div className="h-[259px] w-[259px]">
                <Image
                  src={tarjeta.src}
                  alt="Icon"
                  width={260}
                  height={300}
                  layout="responsive"
                />
              </div>
              <div className="font-robotos w-[262px] text-center text-xl font-bold text-cs500">
                {tarjeta.texto}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto block sm:max-w-xl md:max-w-2xl lg:hidden lg:max-w-5xl xl:max-w-6xl">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
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
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
        >
          {tarjetasData.map((tarjeta) => {
            return (
              <SwiperSlide key={tarjeta.texto}>
                <AboutCard title={tarjeta.texto} picture={tarjeta.src} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default AboutCards;
