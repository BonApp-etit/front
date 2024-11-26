import CardAdministration from "@/components/administration_menu/CardAdministration";
import NavBar from "@/components/NavBar/NavBar";
import { SwiperSlide } from "swiper/react";
import ButtonOutlined from "@/components/ButtonOutlined";
import Category from "@/components/administration_menu/Category";
import TemplateMenu from "../../components/TemplateMenu";
import React, { useState } from "react";
import Modal from "@/components/common_components/Modal";

const DB = [
  {
    nameDish: "Alitas",
    description:
      "Deliciosa orden de alitas empanizadas, aderezadas con toque de salsa especial, de la casa. Y aderezada de un queso Chedar",
    price: "50.50",
    isAvailable: "false",
    image: "/assets/AdministrationMenu/chicken.svg",
  },
  {
    nameDish: "Alitas",
    description:
      "Deliciosa orden de alitas empanizadas, aderezadas con toque de salsa especial, de la casa. Y aderezada de un queso Chedar",
    price: "50.50",
    isAvailable: "true",
    image: "/assets/AdministrationMenu/chicken.svg",
  },
  {
    nameDish: "Alitas",
    description:
      "Deliciosa orden de alitas empanizadas, aderezadas con toque de salsa especial, de la casa. Y aderezada de un queso Chedar",
    price: "50.50",
    isAvailable: "false",
    image: "/assets/AdministrationMenu/chicken.svg",
  },
  {
    nameDish: "Alitas",
    description:
      "Deliciosa orden de alitas empanizadas, aderezadas con toque de salsa especial, de la casa. Y aderezada de un queso Chedar",
    price: "50.50",
    isAvailable: "true",
    image: "/assets/AdministrationMenu/chicken.svg",
  },
  {
    nameDish: "Alitas",
    description:
      "Deliciosa orden de alitas empanizadas, aderezadas con toque de salsa especial, de la casa. Y aderezada de un queso Chedar",
    price: "50.50",
    isAvailable: "false",
    image: "/assets/AdministrationMenu/chicken.svg",
  },
];

export default function AdministrationMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="">
      <NavBar />
      <TemplateMenu
        restaurantLogo="/assets/AdministrationMenu/RestaurantLogo.svg"
        userName="Jhon Doue"
        restauranName="Mr.Burguer"
      >
        <div id="entradas">
          <Category variant="administration" title="Entradas">
            {DB.map((data, idx) => (
              <SwiperSlide key={idx}>
                <CardAdministration
                  isAvailable={data.isAvailable}
                  nameDish={data.nameDish}
                  description={data.description}
                  price={data.price}
                  image={data.image}
                  variant="editCard"
                  openModal={() => setIsModalOpen(true)}
                />
              </SwiperSlide>
            ))}
          </Category>
        </div>

        <div id="bebidas">
          <Category variant="administration" title="Bebidas">
            {DB.map((data, idx) => (
              <SwiperSlide key={idx}>
                <CardAdministration
                  isAvailable={data.isAvailable}
                  nameDish={data.nameDish}
                  description={data.description}
                  price={data.price}
                  image={data.image}
                  variant="editCard"
                />
              </SwiperSlide>
            ))}
          </Category>
        </div>

        <div id="postres">
          <Category variant="administration" title="Postres">
            {DB.map((data, idx) => (
              <SwiperSlide key={idx}>
                <CardAdministration
                  isAvailable={data.isAvailable}
                  nameDish={data.nameDish}
                  description={data.description}
                  price={data.price}
                  image={data.image}
                  variant="editCard"
                />
              </SwiperSlide>
            ))}
          </Category>
        </div>

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

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {/* Contenido del modal */}
          <p>Contenido del modal reutilizable</p>
        </Modal>
        {/* {isModalOpen && (
          <div className="fixed left-0 right-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-50">
            <div className="relative max-h-[80vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-4 shadow">
              <h3 className="text-lg font-semibold text-gray-900">
                Nuevo producto
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-3 top-3"
              >
                Cerrar
              </button>
              <div>
               
                <p>Este es un modal único para esta página.</p>
                <p>Contenido adicional...</p>
                <p>Múltiples líneas de texto...</p>
                <p>(Simulando mucho contenido)</p>
                <p>(Más contenido aún)</p>
              </div>
            </div>
          </div>
        )} */}
      </TemplateMenu>
    </main>
  );
}
