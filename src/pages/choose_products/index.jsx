import NavBar from "@/components/NavBar/NavBar";
import MainLayout from "@/components/common_components/MainLayout";
import LayoutCard from "@/components/common_components/LayoutCard";
import CardContent from "@/components/UserOrder/CardContent";
import ButtonContained from "@/components/common_components/ButtonContained";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Arrow from "@/components/administration_menu/Arrow";
import SwiperConfiguration from "@/components/administration_menu/SwiperConfiguration";

export default function ChooseProducts(title, subtitle) {
  return (
    <main>
      <NavBar></NavBar>
      <MainLayout>
        <div class="inline-flex flex-col items-start justify-start gap-1">
          <h1 class="self-stretch font-poppins text-[28px] font-medium leading-7 text-[#191c1e] md:text-4xl">
            ¡Tu orden casi esta lista!
          </h1>
          <h4 class="self-stretch font-ubuntu text-xl font-medium text-black/50 md:text-2xl">
            Hecha un vistazo, que todo este en orden
          </h4>
        </div>
        <div className="flex h-[600px] flex-col gap-3 shadow-md lg:h-[650px] lg:w-[630px]">
          <SwiperConfiguration variantDirection="vertical">
            <SwiperSlide>
              <LayoutCard>
                <CardContent />
              </LayoutCard>
            </SwiperSlide>
            <SwiperSlide>
              <LayoutCard>
                <CardContent />
              </LayoutCard>
            </SwiperSlide>

            <SwiperSlide>
              <LayoutCard>
                <CardContent />
              </LayoutCard>
            </SwiperSlide>
            <SwiperSlide>
              <LayoutCard>
                <CardContent />
              </LayoutCard>
            </SwiperSlide>
          </SwiperConfiguration>
        </div>
      </MainLayout>
    </main>
  );
}
