import CardAdministration from "@/components/administration_menu/CardAdministration";
import NavBar from "@/components/NavBar/NavBar";
import { SwiperSlide } from "swiper/react";
import ButtonOutlined from "@/components/ButtonOutlined";
import Category from "@/components/administration_menu/Category";
import TemplateMenu from "../../components/TemplateMenu";

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
  return (
    <main className="">
      <NavBar />
      <TemplateMenu
        restaurantLogo="/assets/AdministrationMenu/RestaurantLogo.svg"
        userName="Jhon Doue"
        restauranName="Mr.Burguer"
      >
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
              />
            </SwiperSlide>
          ))}
        </Category>
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
      </TemplateMenu>
    </main>
  );
}
