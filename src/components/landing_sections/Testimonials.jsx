import TarjetasTerceras from "./ThirdCards";
const infoComments = [
  {
    name: "Jessica",
    review:
      "Esta aplicación ha cambiado la forma en que pido comida. Es tan fácil de usar y el proceso es facil.",
  },
  {
    name: "Mario",
    review:
      "Me encanta lo simple que es pedir desde mi restaurante favorito. 10/10",
  },
  {
    name: "Laura",
    review:
      "La experiencia de pedir comida nunca ha sido tan sencilla. La interfaz es amigable",
  },
];
export default function Testimonials() {
  return (
    <section className="bg-white px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="font-poppins text-[48px] font-bold text-black">
          ¿Que dicen nuestros <br /> clientes de nosotros?
        </h2>
      </div>

      {/* Sección de Tarjetas */}
      <div className="mx-auto flex flex-wrap justify-center gap-4 sm:mx-8 md:mx-16 lg:mx-[120px]">
        {infoComments.map((info, index) => (
          <TarjetasTerceras key={index} review={info.review} name={info.name} />
        ))}
      </div>
    </section>
  );
}
