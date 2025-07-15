import TestimonialCards from './TestimonialCards'
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Rating from './Rating'
import { Pagination } from 'swiper/modules'
const infoComments = [
  {
    name: 'Jessica',
    review:
      'Esta aplicación ha cambiado la forma en que pido comida. Es tan fácil de usar y el proceso es facil.',
  },
  {
    name: 'Mario',
    review:
      'Me encanta lo simple que es pedir desde mi restaurante favorito. 10/10',
  },
  {
    name: 'Laura',
    review:
      'La experiencia de pedir comida nunca ha sido tan sencilla. La interfaz es amigable',
  },
]

export default function Testimonials() {
  return (
    <section className="py-12">
      <h2 className="text-center font-poppins text-2xl font-bold text-black md:mx-auto md:mb-12 md:w-[632px] md:text-[32px] md:leading-normal lg:w-[650px] lg:text-5xl lg:leading-[70px]">
        ¿Que dicen nuestros clientes de nosotros?
      </h2>

      <div className="">
        <div className="mx-auto hidden xl:flex xl:w-full xl:justify-between">
          {infoComments.map((info, index) => (
            <TestimonialCards
              key={index}
              review={info.review}
              name={info.name}
            />
          ))}
        </div>
      </div>
      <div className="mx-auto block sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:hidden">
        <Swiper
          loop={true}
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
              centeredSlides: true,
            },
            768: {
              slidesPerView: 1.8,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
        >
          {infoComments.map((info, index) => (
            <SwiperSlide key={index}>
              <TestimonialCards review={info.review} name={info.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="lg:hidden">
        <Rating />
      </div>
    </section>
  )
}
