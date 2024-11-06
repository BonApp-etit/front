import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import InputContained from "../common_components/InputContained";
import ButtonContained from "../common_components/ButtonContained";

export default function Card() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="w-full">
      <section className="rounded-[20px] bg-[#fcfcfc] px-[30px] py-4 shadow">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h6 className="font-poppins text-base font-semibold leading-tight text-[#222222]">
              Nombre del restaurante
            </h6>
            <p className="font-poppins text-sm font-medium leading-[18px] text-[#717171]">
              Mr.Burguer
            </p>
          </div>
          <button onClick={toggleExpand}>
            <ArrowRightIcon
              strokeWidth={2}
              className={`h-7 w-7 text-cs500 transition-transform duration-300 ease-in-out ${isExpanded ? "rotate-90" : ""}`}
            />
          </button>
        </div>

        <section
          className={`transform overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4">
            <InputContained
              label="Nombre del restaurante"
              placeholder="Mr.Burguer"
              type="text"
              variant="outlined"
            />
            <div className="my-3 flex w-full justify-between">
              <ButtonContained
                variant="generalPoppins"
                text="Guardar cambios"
              />
              <ButtonContained variant="text" text="Descartar" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
