import NavBar from "@/components/NavBar/NavBar";
import MainLayout from "@/components/common_components/MainLayout";
import LayoutCard from "@/components/common_components/LayoutCard";
import CardContent from "@/components/UserOrder/CardContent";
import { SwiperSlide } from "swiper/react";
import ButtonContained from "@/components/common_components/ButtonContained";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperConfiguration from "@/components/administration_menu/SwiperConfiguration";
import Stepper from "@/components/common_components/Stepper";

export default function ChooseProducts(title, subtitle) {
  const [currentStep, setCurrentStep] = useState(1); // Paso inicial

  const stepsLength = 5; // Número total de pasos

  const handleNext = () => {
    if (currentStep < stepsLength) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

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
        <div className="mt-2">
          <Stepper currentStep={currentStep} />
        </div>
        <div>
          <LayoutCard>
            <div className="mx-auto max-w-[320px] md:max-w-[600px]">
              <div className="flex justify-evenly">
                <p className="font-ubuntu text-base font-normal leading-relaxed tracking-tight text-black">
                  Total
                </p>
                <div className="font-ubuntu text-base leading-relaxed tracking-tight text-cs600">
                  <span className="font-normal">$</span>
                  <span className="mr-1 font-bold">359</span>
                  <span className="font-normal">MXN</span>
                </div>
              </div>

              <div className="flex justify-evenly">
                <ButtonContained
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  text="Volver"
                  variant="text"
                  showIcon="true"
                />
                <ButtonContained
                  onClick={handleNext}
                  disabled={currentStep === stepsLength}
                  text="Siguiente"
                  variant="generalPoppins"
                  showIcon="true"
                />
              </div>
            </div>
          </LayoutCard>
        </div>
      </MainLayout>
    </main>
  );
}
