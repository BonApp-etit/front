import MenuMobile from "./MenuMobile";
import Logo from "./Logo";
import Links from "./Links";

const MenuMaterial = () => {
  return (
    <nav className="flex justify-center bg-white p-4 shadow-md md:px-14">
      <section className="mb-1 flex w-full min-w-[328px] max-w-[400px] items-center justify-between md:min-w-[632px] md:max-w-[700px] lg:max-w-[1200px]">
        <Logo />
        <Links />
        <MenuMobile
          items={["Iniciar sesion", "Registrate", "Beneficios", "Servicios"]}
        />
      </section>
    </nav>
  );
};

export default MenuMaterial;
