import Image from "next/image";
import ButtonContained from "../common_components/ButtonContained";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function CardAdministration() {
  return (
    <section className="">
      <div className="w-[160px] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg md:w-[230px] lg:w-[280px]">
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

          <div className="p-1 lg:p-2">
            <h6 className="mb-1 font-ubuntu text-sm font-bold text-cs600 md:text-base lg:text-xl">
              Alitas
            </h6>
            <p className="line-clamp-3 font-ubuntu text-[10px] font-normal leading-tight text-[#667473] md:text-xs lg:text-sm">
              Deliciosa orden de alitas aderezadas con un toque de salsa
              especial de la casa con un
            </p>
            <div className="flex h-[25px] items-center">
              <span className="mr-1 font-ubuntu text-xs font-medium text-[#424949] lg:text-sm">
                $
              </span>
              <span className="mr-1 font-ubuntu text-sm font-bold tracking-tight text-[#242828] md:text-sm lg:text-xl">
                50.50
              </span>
              <span className="text-ce font-ubuntu text-[10px] font-medium text-[#424949] lg:text-sm">
                MXN
              </span>
            </div>
          </div>
        </section>

        <div className="flex justify-center">
          <ButtonContained
            variant="generalUbuntu"
            text="Editar producto"
            type="submit"
          ></ButtonContained>
        </div>
        <div className="mt-2 flex h-[20px] items-center justify-center rounded-b-2xl bg-cs200 text-[10px] font-medium text-cs900 md:text-xs lg:h-[24px] lg:text-sm">
          <p>Detalles del producto</p>
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </div>
      </div>
    </section>
  );
}
