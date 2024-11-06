import Card from "@/components/restaurant_configuration/Card";
import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
export default function RestauranConfiguration() {
  return (
    <main>
      <NavBar></NavBar>
      <div className="flex justify-center bg-white p-4 shadow-md md:px-14">
        <section className="mb-1 flex w-full max-w-[400px] flex-col md:min-w-[632px] md:max-w-[700px] lg:max-w-[1200px]">
          <section className="mb-5 flex items-center justify-start gap-4">
            <div className="w-[100px]">
              <Image
                width={40}
                height={40}
                src="/assets/AdministrationMenu/RestaurantLogo.svg"
                alt="Logo restaurant"
                layout="responsive"
              ></Image>
            </div>
            <h1 className="font-poppins text-2xl font-medium text-black">
              Mi restaurante
            </h1>
          </section>

          <section className="flex w-full flex-col gap-2">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </section>
        </section>
      </div>
    </main>
  );
}
