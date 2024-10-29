import TestimonialCards from "./TestimonialCards";
const infoComments = [
  // {
  //   name: "Jessica",
  //   review:
  //     "Esta aplicación ha cambiado la forma en que pido comida. Es tan fácil de usar y el proceso es facil.",
  // },
  {
    name: "Mario",
    review:
      "Me encanta lo simple que es pedir desde mi restaurante favorito. 10/10",
  },
  // {
  //   name: "Laura",
  //   review:
  //     "La experiencia de pedir comida nunca ha sido tan sencilla. La interfaz es amigable",
  // },
];
export default function Testimonials() {
  return (
    <section className="px-4 py-12">
      <h2 className="mb-12 text-center font-poppins text-2xl font-bold text-black">
        ¿Que dicen nuestros clientes de nosotros?
      </h2>

      {/* Sección de Tarjetas */}
      <div className="mx-auto">
        {infoComments.map((info, index) => (
          <TestimonialCards key={index} review={info.review} name={info.name} />
        ))}
      </div>
    </section>
  );
}
