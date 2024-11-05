import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function SwiperConfiguration({ children }) {
  return (
    <div>
      <Swiper
        navigation
        modules={[Navigation]}
        pagination={{ clickable: true }}
        breakpoints={{
          360: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 2,
          },
          744: {
            slidesPerView: 2.6,
            spaceBetween: 24,
            centeredSlides: false,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 22,
            centeredSlides: false,
          },
        }}
      >
        {children}
      </Swiper>
    </div>
  );
}
