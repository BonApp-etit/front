import LayoutCard from "../common_components/LayoutCard";
import ButtonContained from "../common_components/ButtonContained";

export default function Order() {
  return (
    <LayoutCard>
      <div className="flex flex-col gap-2 md:gap-0">
        <h2 className="md:2xl font-ubuntu text-xl font-bold text-black">
          Hamburguesa Sencilla
        </h2>
        <span className="font-ubuntu text-base leading-none tracking-tight text-cstext md:text-lg">
          Ingredientes eliminados:
        </span>
        <span className="font-ubuntu text-sm font-normal leading-[14px] tracking-tight text-black/50 md:text-lg">
          Chile jalapeño, Catsup, Mostaza
        </span>
        <span className="font-ubuntu text-base leading-none tracking-tight text-cstext md:text-lg">
          Ingredientes extra:
        </span>
        <span className="font-ubuntu text-sm font-normal leading-[14px] tracking-tight text-black/50 md:text-lg">
          Queso, Tocino, Aguacate
        </span>
      </div>

      <section>
        <p className="mt-2 font-ubuntu text-base font-normal leading-3 tracking-tight text-black md:text-lg">
          Comentarios
        </p>
        <div className="mt-2 rounded-2xl border border-black p-2 text-cstext">
          <p className="md:text-base">
            Quiero el pan bien tostado, pero no quemado, solo dorado. La carne
            la quiero término medio, jugosa, pero no cruda. Quiero doble queso,
            pero que esté bien derretido, no solo puesto encima. Agrega lechuga,
            pero que sea solo una hoja, no demasiado.
          </p>
        </div>
        <div className="mt-6 flex justify-evenly">
          <ButtonContained text="Aceptar" variant="generalPoppins" />
          <ButtonContained text="Rechazar" variant="text" />
        </div>
      </section>
    </LayoutCard>
  );
}
