import MenuHamburguer from "./MenuMobile";
import Logo from "./Logo";
import Links from "./Links";

const MenuMaterial = () => {
  return (
    <nav className="flex justify-center bg-white shadow-md">
      <section className="mb-1 flex w-[328px] items-center justify-between py-4 md:w-[632px] lg:w-[1200px]">
        <Logo />
        <Links />
        <MenuHamburguer
          items={["Iniciar sesion", "Registrate", "Beneficios", "Servicios"]}
        />
      </section>
    </nav>
  );
};

export default MenuMaterial;
