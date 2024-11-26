import clsx from "clsx";
import ButtonContained from "../common_components/ButtonContained";
import LayoutCard from "../common_components/LayoutCard";

export default function KitchenOrderCard({ children, bgColor, time }) {
  return (
    <section className="mb-6 flex justify-center">
      <div className="max-w-[400px] md:min-w-[300px] md:max-w-[305px] lg:max-w-[375px]">
        <div className="mb-2">
          <LayoutCard
            tailwindClasses={clsx("bg-green-600", {
              " bg-yellow-500": bgColor === "yellow",
              " bg-red-500": bgColor === "red",
            })}
          >
            <div className="flex w-full flex-col items-center">
              <h3 className="font-poppins text-xl font-semibold text-white md:text-3xl">
                Mesa 4
              </h3>
              <p className="font-poppins text-sm font-medium leading-snug tracking-tight text-white md:text-base">
                Pedido ordenado hace {time} min
              </p>
            </div>
          </LayoutCard>
        </div>
        {children}
      </div>
    </section>
  );
}
