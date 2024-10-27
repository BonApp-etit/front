import Logo from "./Logo";
import MenuHamburguer from "./MenuHamburguer";
export default function NavBar() {
  return (
    <nav className="sm: w-360px md:744px lg:1200px">
      <section className="py-5 px-4 font-poppins flex justify-between  font-semibold sm: w-full shadow bg-white">
        <Logo />
        <MenuHamburguer />
      </section>
    </nav>
  );
}
