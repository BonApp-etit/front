export default function Links() {
  const links = ["Iniciar sesion", "Registrate", "Beneficios", "Servicios"];
  return (
    <section className="hidden space-x-6 lg:flex">
      {links.map((link, index) => (
        <a
          key={index}
          href={`#${link}`}
          className="font-poppins text-base font-medium text-cstext hover:text-cs500"
        >
          {link}
        </a>
      ))}
    </section>
  );
}
