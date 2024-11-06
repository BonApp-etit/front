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
        <Category variant="customer" title="Entradas">
          {DB.map((data, idx) => (
            <SwiperSlide key={idx}>
              <CardAdministration
                isAvailable={data.isAvailable}
                nameDish={data.nameDish}
                description={data.description}
                price={data.price}
                image={data.image}
                variant="customerCard"
              />
            </SwiperSlide>
          ))}
        </Category>
        <Category variant="customer" title="Bebidas">
          {DB.map((data, idx) => (
            <SwiperSlide key={idx}>
              <CardAdministration
                isAvailable={data.isAvailable}
                nameDish={data.nameDish}
                description={data.description}
                price={data.price}
                image={data.image}
                variant="customerCard"
              />
            </SwiperSlide>
          ))}
        </Category>
        <Category variant="customer" title="Postres">
          {DB.map((data, idx) => (
            <SwiperSlide key={idx}>
              <CardAdministration
                isAvailable={data.isAvailable}
                nameDish={data.nameDish}
                description={data.description}
                price={data.price}
                image={data.image}
                variant="customerCard"
              />
            </SwiperSlide>
          ))}
        </Category>
      </TemplateMenu>
    </main>
  );
}
