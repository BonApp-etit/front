import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa los estilos básicos de Swiper

//import { Pagination, Navigation, EffectFade } from "swiper/modules";

const TarjetasPrimeras = () => {
  const tarjetasData = [
    { texto: "Recetas de calidad", src: "/assets/secondFirst.svg" },
    { texto: "Facil de usar", src: "/assets/secondSecond.svg" },
    { texto: "Procesos Faciles", src: "/assets/secondThird.svg" },
  ];
  return (
    <>
      <div className="flex justify-center">
        <Swiper
          pagination={{ clickable: true }}
          breakpoints={{
            360: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            744: {
              slidesPerView: 2,
              spaceBetween: 25,
              centeredSlides: true,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 390,
              centeredSlides: false,
            },
          }}
        >
          {tarjetasData.map((tarjeta, index) => (
            <SwiperSlide key={index}>
              <div className="inline-flex h-[381px] flex-col items-center justify-center gap-[19px] rounded-[30px] border border-[#e7d6d2] bg-[#fffbfa] p-10">
                <div className="relative h-[259px] w-[259px]">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TarjetasPrimeras;
