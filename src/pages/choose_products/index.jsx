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

import LayoutOrder from "@/components/UserOrder/LayoutOrder";

export default function ChooseProducts() {
  return (
    <main>
      <NavBar></NavBar>
      <LayoutOrder
        title="¡Tu orden casi esta lista!"
        subtitle="Hecha un vistazo, que todo este en orden"
      >
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
      </LayoutOrder>
    </main>
  );
}
