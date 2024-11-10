import NavBar from "@/components/NavBar/NavBar";
import MainLayout from "@/components/common_components/MainLayout";
import LayoutCard from "@/components/common_components/LayoutCard";
import CardContent from "@/components/UserOrder/CardContent";
import { SwiperSlide } from "swiper/react";
import TotalCard from "@/components/UserOrder/TotalCard";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperConfiguration from "@/components/administration_menu/SwiperConfiguration";
import Stepper from "@/components/common_components/Stepper";

export default function ChooseProducts(title, subtitle) {
  const [currentStep, setCurrentStep] = useState(1); // Paso inicial

  const totalSteps = 5; // Número total de pasos

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

        <div className="lg:flex lg:items-center lg:gap-10">
          <div className="flex h-[530px] flex-col gap-3 shadow-md md:h-[630px] lg:h-[630px] lg:w-[630px]">
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
          <div className="hidden flex-1 lg:block lg:w-full">
            <TotalCard
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              totalSteps={totalSteps}
            ></TotalCard>
          </div>
        </div>

        <div className="mt-5">
          <Stepper currentStep={currentStep} />
        </div>
        <div className="mt-4 block lg:hidden lg:w-full">
          <TotalCard
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            totalSteps={totalSteps}
          ></TotalCard>
        </div>
      </MainLayout>
    </main>
  );
}
