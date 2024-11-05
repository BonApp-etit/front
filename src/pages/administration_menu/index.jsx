import CardAdministration from "@/components/administration_menu/CardAdministration";
import RestaurantName from "../../../public/assets/AdministrationMenu/RestaurantName";
import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import CategoriesButton from "@/components/administration_menu/CategoriesButton";
import ButtonContained from "@/components/common_components/ButtonContained";
import SwiperConfiguration from "@/components/administration_menu/SwiperConfiguration";
import { SwiperSlide } from "swiper/react";
import ButtonOutlined from "@/components/ButtonOutlined";
import Switch from "@/components/common_components/Switch";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

export default function AdministrationMenu() {
  return (
    <main className="">
      <NavBar />
      <section className="flex h-[60px] w-full justify-center rounded-lg bg-cs200 md:h-[115px] lg:h-[145px]">
        <div className="w-[328px] md:w-[632px] lg:w-[1200px]">
          <section>
            <div className="mt-4 flex items-end space-x-1 md:mt-7 lg:mt-7">
              {/* Logo */}
              <div className="w-20 md:w-[150px] lg:w-[200px]">
                <Image
                  width={30}
                  height={30}
                  alt="Logo restaurant"
                  src={"/assets/AdministrationMenu/RestaurantLogo.svg"}
                  layout="responsive"
                />
              </div>

              {/* Nombre del restaurante */}
              {/* <RestaurantName
                restauranName="Mr. Burguer"
                userName="John Doue"
              /> */}
              <section className="font-semibold">
                <h1 className="font-poppins text-lg leading-7 tracking-tight text-cs900 md:text-[28px] lg:text-[40px]">
                  Mr. Burguer
                </h1>
                <h5 className="font-poppins text-xs text-black md:mt-1 md:text-lg lg:mt-2">
                  {` ¡Hola John Doue, Bienvenido!`}
                </h5>
              </section>
            </div>

            {/* Línea divisoria */}
            <div className="my-2 w-full border border-cs500 md:w-[632px] lg:w-[1200px]"></div>
          </section>
          <div className="mb-1 lg:mb-3">
            <CategoriesButton names={["Entradas", "Bebidas", "Postres"]} />
          </div>

          <section className="mb-4">
            <div className="flex items-center justify-between">
              <h3 className="font-poppins text-xl font-medium leading-loose tracking-tight lg:text-4xl">
                Entradas
              </h3>

              <div className="flex gap-1 md:gap-3">
                <Switch label="Deshabilitar categoria"></Switch>
                <ButtonContained
                  text="Eliminar"
                  tailwindClasses=" bg-red-600 !px-2 !py-1  text-xs"
                  variant="generalPoppins"
                ></ButtonContained>
              </div>
            </div>

            <div>
              <SwiperConfiguration>
                <SwiperSlide>
                  <CardAdministration variant="AddCard"></CardAdministration>
                </SwiperSlide>
                <SwiperSlide>
                  <CardAdministration variant="editCard"></CardAdministration>
                </SwiperSlide>
                <SwiperSlide>
                  <CardAdministration variant="editCard"></CardAdministration>
                </SwiperSlide>
                <SwiperSlide>
                  <CardAdministration variant="editCard"></CardAdministration>
                </SwiperSlide>
                <SwiperSlide>
                  <CardAdministration variant="editCard"></CardAdministration>
                </SwiperSlide>
              </SwiperConfiguration>
            </div>
          </section>

          <section className="mb-4">
            <div className="flex items-center justify-between">
              <h3 className="font-poppins text-xl font-medium leading-loose tracking-tight lg:text-4xl">
                Bebidas
              </h3>
              <ButtonContained
                text="Eliminar"
                tailwindClasses=" bg-red-600 !px-2 !py-1  text-xs"
                variant="generalPoppins"
              ></ButtonContained>
            </div>

            <div>
              <SwiperConfiguration>
                <SwiperSlide>
                  <CardAdministration variant="AddCard"></CardAdministration>
                </SwiperSlide>
                <SwiperSlide>
                  <CardAdministration variant="editCard"></CardAdministration>
                </SwiperSlide>
                <SwiperSlide>
                  <CardAdministration variant="editCard"></CardAdministration>
                </SwiperSlide>
                <SwiperSlide>
                  <CardAdministration variant="editCard"></CardAdministration>
                </SwiperSlide>
                <SwiperSlide>
                  <CardAdministration variant="editCard"></CardAdministration>
                </SwiperSlide>
              </SwiperConfiguration>
            </div>
          </section>

          <section className="mb-4">
            <div className="flex items-center justify-between">
              <h3 className="font-poppins text-xl font-medium leading-loose tracking-tight lg:text-4xl">
                Postres
              </h3>
              <ButtonContained
                text="Eliminar"
                tailwindClasses=" bg-red-600 !px-2 !py-1  text-xs"
                variant="generalPoppins"
              ></ButtonContained>
            </div>

            <div>
              <SwiperConfiguration>
                <SwiperSlide>
                  <CardAdministration variant="AddCard"></CardAdministration>
                </SwiperSlide>
                <SwiperSlide>
                  <CardAdministration variant="editCard"></CardAdministration>
                </SwiperSlide>
                <SwiperSlide>
                  <CardAdministration variant="editCard"></CardAdministration>
                </SwiperSlide>
                <SwiperSlide>
                  <CardAdministration variant="editCard"></CardAdministration>
                </SwiperSlide>
                <SwiperSlide>
                  <CardAdministration variant="editCard"></CardAdministration>
                </SwiperSlide>
              </SwiperConfiguration>
            </div>
          </section>

          <section className="mb-4">
            <div className="flex items-center justify-between">
              <h3 className="font-poppins text-xl font-medium leading-loose tracking-tight lg:text-4xl">
                Nueva categoria
              </h3>
            </div>

            <div className="flex h-[150px] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-cs300 md:h-[200px] lg:h-[250px]">
              <p className="font-roboto text-xs font-medium leading-tight tracking-wide text-cs950 md:text-base">
                ¡Comienza aqui agregando tu primer platillo!
              </p>

              <ButtonOutlined
                text="Agregar categoria"
                variant="dashed"
              ></ButtonOutlined>
            </div>
          </section>
          <div className="h-5 md:h-10 lg:h-20"></div>
        </div>
      </section>
    </main>
  );
}
