import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css' // Importa los estilos básicos de Swiper
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import AboutCard from '@/components/landing_sections/AboutCard'

const tarjetasData = [
  {
    texto: 'Recetas de calidad',
    src: '/assets/AboutCardsImages/Quality-recipes.svg',
  },
  { texto: 'Facil de usar', src: '/assets/AboutCardsImages/Easy-to-use.svg' },
  {
    texto: 'Procesos Faciles',
    src: '/assets/AboutCardsImages/Easy-processes.svg',
  },
]

export default function Test() {
  return (
    <section className="mx-auto">
      <div className="mx-auto hidden w-[1200px] justify-between xl:flex">
        {tarjetasData.map((tarjeta, index) => (
          <div
            key={index}
            className="inline-flex h-[381px] flex-col items-center justify-center gap-[19px] rounded-[30px] border border-[#e7d6d2] bg-[#fffbfa] p-10"
          >
            <Image
              src={tarjeta.src}
              alt="Icon"
              width={260}
              height={300}
              className="h-[259px] w-[259px]"
            />

            <div className="font-robotos w-[262px] text-center text-xl font-bold text-cs500">
              {tarjeta.texto}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto block sm:max-w-[360px] md:max-w-[672px] xl:hidden">
        <div className="mx-auto">
          <Swiper
            // loop={true}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
                centeredSlides: true,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 100,

                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: true,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <AboutCard
                title={tarjetasData[0].texto}
                picture={tarjetasData[0].src}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AboutCard
                title={tarjetasData[1].texto}
                picture={tarjetasData[0].src}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AboutCard
                title={tarjetasData[2].texto}
                picture={tarjetasData[0].src}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>

    // {tarjetasData.map((tarjeta) => {
    //   return (

    //    );
    //  })}
  )
}
