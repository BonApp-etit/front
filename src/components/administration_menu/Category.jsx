import Switch from "@/components/common_components/Switch";
import SwiperConfiguration from "@/components/administration_menu/SwiperConfiguration";
import { SwiperSlide } from "swiper/react";
import ButtonContained from "@/components/common_components/ButtonContained";
import CardAdministration from "@/components/administration_menu/CardAdministration";

export default function Category({ title, children, isAdministration }) {
  return (
    <section className="mb-4">
      <div className="flex items-center justify-between">
        <h3 className="font-poppins text-xl font-medium leading-loose tracking-tight lg:text-4xl">
          {title}
        </h3>
        {isAdministration === "true" && (
          <div className="flex gap-1 md:gap-3">
            <Switch label="Deshabilitar categoria"></Switch>
            <ButtonContained
              text="Eliminar"
              tailwindClasses=" bg-red-600 !px-2 !py-1  text-xs"
              variant="generalPoppins"
            ></ButtonContained>
          </div>
        )}
      </div>

      <div>
        <SwiperConfiguration>
          {isAdministration === "true" && (
            <SwiperSlide>
              <CardAdministration variant="AddCard" />
            </SwiperSlide>
          )}

          {children}
        </SwiperConfiguration>
      </div>
    </section>
  );
}
