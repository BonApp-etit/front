import CardAdministration from "@/components/administration_menu/CardAdministration";
import RestaurantName from "../../../public/assets/AdministrationMenu/RestaurantName";
import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
export default function AdministrationMenu() {
  return (
    <main>
      <NavBar></NavBar>
      <section className="flex h-[60px] w-full justify-center rounded-lg bg-cs200 md:h-[120px] lg:h-[180px]">
        <div className="w-[328px] md:w-[632px] lg:w-[1200px]">
          {/* Reemplzar el w con minwidth y max width */}
          <div className="relative">
            <div className="absolute left-0 top-5 w-20 md:top-9 md:w-[150px] lg:top-16 lg:w-[200px]">
              <Image
                width={30}
                height={30}
                alt="Logo restaurant"
                src={"/assets/AdministrationMenu/RestaurantLogo.svg"}
                layout="responsive"
              />
            </div>
            <div className="absolute left-[85px] top-[54px] md:left-[170px] md:top-[120px] lg:left-[220px] lg:top-[185px]">
              <RestaurantName
                restauranName="Mr. Burguer"
                userName="John Doue"
              />
            </div>
            <div className="relative flex justify-center">
              <div className="absolute top-[105px] w-full border border-cs500 md:top-[190px] md:w-[632px] lg:top-[270px] lg:w-[1200px]"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
