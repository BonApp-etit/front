import Image from "next/image";
import ButtonContained from "../common_components/ButtonContained";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function CardAdministration() {
  return (
    <section className="flex h-dvh items-center justify-center">
      <div className="w-[160px] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <section className="hover:bg-slate-100">
          <div className="w-full">
            <Image
              className="rounded-t-2xl"
              width={40}
              height={40}
              alt="chicken"
              src={"/assets/AdministrationMenu/chicken.svg"}
              layout="responsive"
            />
          </div>

          <div className="p-1">
            <h6 className="mb-1 font-ubuntu text-sm font-bold text-cs600">
              Alitas
            </h6>
            <p className="line-clamp-3 font-ubuntu text-[10px] font-normal leading-tight text-[#667473]">
              Deliciosa orden de alitas aderezadas con un toque de salsa
              especial de la casa con un
            </p>
            <div className="flex h-[25px] items-center">
              <span className="mr-1 font-ubuntu text-xs font-medium text-[#424949]">
                $
              </span>
              <span className="mr-1 font-ubuntu text-sm font-bold tracking-tight text-[#242828]">
                50.50
              </span>
              <span className="text-ce font-ubuntu text-[10px] font-medium text-[#424949]">
                MXN
              </span>
            </div>
          </div>
        </section>

        <div className="m-1">
          <ButtonContained
            tailwindClasses="px-[4px] py-[4px] !text-[10px] rounded-[8px] font-ubuntu mx-auto"
            text="Editar producto"
            showIcon={false}
          ></ButtonContained>
        </div>
        <div className="flex h-[20px] items-center justify-center rounded-b-2xl bg-cs200 text-[10px] font-semibold text-cs900">
          <p>Detalles del producto</p>
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </div>
      </div>
    </section>
  );
}
