import MainLayout from "../common_components/MainLayout";
import SwiperConfiguration from "../administration_menu/SwiperConfiguration";
import { SwiperSlide } from "swiper/react";
import TotalCard from "./TotalCard";
import Stepper from "../common_components/Stepper";
import React, { useState } from "react";

export default function LayoutOrder({ children, title, subtitle }) {
  const [currentStep, setCurrentStep] = useState(1); // Paso inicial

  const totalSteps = 5; // Número total de pasos
  return (
    <MainLayout>
      <div class="inline-flex flex-col items-start justify-start gap-1">
        <h1 class="self-stretch font-poppins text-[28px] font-medium leading-7 text-[#191c1e] md:text-4xl">
          {title}
        </h1>
        <h4 class="self-stretch font-ubuntu text-xl font-medium text-black/50 md:text-2xl">
          {subtitle}
        </h4>
      </div>

      <div className="lg:flex lg:items-center lg:gap-10">
        <div className="flex h-[530px] flex-col gap-3 shadow-md md:h-[630px] lg:h-[630px] lg:w-[630px]">
          <SwiperConfiguration variantDirection="vertical">
            {children}
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
  );
}