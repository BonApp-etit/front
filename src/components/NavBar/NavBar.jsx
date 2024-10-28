import MenuHamburguer from "./MenuMobile";
import Logo from "./Logo";
import Links from "./Links";

const MenuMaterial = () => {
  return (
    <nav className="mb-1 flex items-center justify-between bg-white p-4 shadow-md md:px-14 lg:px-[120px]">
      <Logo />
      <Links />
      <MenuHamburguer
        items={["Iniciar sesion", "Registrate", "Beneficios", "Servicios"]}
      />
    </nav>
  );
};

export default MenuMaterial;
