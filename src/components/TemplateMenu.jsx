import Image from "next/image";
import CategoriesButton from "@/components/administration_menu/CategoriesButton";
import SearchBar from "@/components/administration_menu/SearchBar";
export default function TemplateMenu({
  userName,
  restaurantLogo,
  restauranName,
  children,
}) {
  return (
    <main>
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
                  src={restaurantLogo}
                  layout="responsive"
                />
              </div>
              <section className="font-semibold">
                <h1 className="font-poppins text-lg leading-7 tracking-tight text-cs900 md:text-[28px] lg:text-[40px]">
                  {restauranName}
                </h1>
                <h5 className="font-poppins text-xs text-black md:mt-1 md:text-lg lg:mt-2">
                  {` ¡Hola ${userName}, Bienvenido!`}
                </h5>
              </section>
            </div>

            {/* Línea divisoria */}
            <div className="my-2 border border-cs500 md:w-[632px] lg:w-[1200px]"></div>
          </section>
          <div className="mb-1 lg:mb-3">
            <div className="md:flex md:flex-row-reverse md:gap-4">
              <div className="mb-3 w-full">
                <SearchBar />
              </div>
              <CategoriesButton names={["Entradas", "Bebidas", "Postres"]} />
            </div>
          </div>
          <div>{children}</div>

          <div className="h-5 md:h-10 lg:h-20"></div>
        </div>
      </section>
    </main>
  );
}
