import CardAdministration from "@/components/administration_menu/CardAdministration";
import RestaurantName from "../../../public/assets/AdministrationMenu/RestaurantName";
import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import CategoriesButton from "@/components/administration_menu/CategoriesButton";
import { SwiperSlide } from "swiper/react";
import ButtonOutlined from "@/components/ButtonOutlined";
import SearchBar from "@/components/administration_menu/SearchBar";
import Category from "@/components/administration_menu/Category";

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
      <section className="flex h-[60px] w-full justify-center rounded-lg bg-cs200 md:h-[115px] md:px-14 lg:h-[145px]">
        <div className="min-w-[328px] max-w-[400px] md:min-w-[632px] md:max-w-[700px] lg:max-w-[1200px]">
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
            <div className="my-2 border border-cs500 md:w-[632px] lg:w-[1200px]"></div>
          </section>
          <div className="mb-1 lg:mb-3">
            <div className="md:flex md:flex-row-reverse md:gap-4">
              <div className="mb-3 w-full">
                <SearchBar></SearchBar>
              </div>
              <CategoriesButton names={["Entradas", "Bebidas", "Postres"]} />
            </div>
          </div>
          <Category isAdministration="true" title="Entradas">
            {" "}
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
          <Category isAdministration="true" title="Bebidas">
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
          <Category isAdministration="true" title="Postres">
            {" "}
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
          <div className="h-5 md:h-10 lg:h-20"></div>
        </div>
      </section>
    </main>
  );
}
