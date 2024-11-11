import NavBar from "@/components/NavBar/NavBar";
import LayoutCard from "@/components/common_components/LayoutCard";
import CardContent from "@/components/UserOrder/CardContent";
import { SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import LayoutOrder from "@/components/UserOrder/LayoutOrder";
import Card from "@/components/restaurant_configuration/Card";

export default function PurchaseMade() {
  return (
    <main>
      <NavBar></NavBar>
      <LayoutOrder
        title="¡Gracias por tu compra!"
        subtitle="En un momento un integrante de Mr. Burguer te llevara tu pedido"
        showLoadingButton={false}
        swiperContainer={false}
        showSingleButton={true}
      >
        <LayoutCard>
          <CardContent />
          <CardContent />
        </LayoutCard>
      </LayoutOrder>
    </main>
  );
}
