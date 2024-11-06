import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import ButtonContained from "../common_components/ButtonContained";
import LayoutCard from "../common_components/LayoutCard";

export default function Card({ titleInfo, info, children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <LayoutCard>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h6 className="font-poppins text-base font-semibold leading-tight text-[#222222] lg:text-lg">
            {titleInfo}
          </h6>
          <p className="font-poppins text-sm font-medium leading-[18px] text-[#717171] lg:text-base">
            {info}
          </p>
        </div>
        <button onClick={toggleExpand}>
          <ArrowRightIcon
            strokeWidth={2}
            className={`h-7 w-7 text-cs500 transition-transform duration-300 ease-in-out md:h-8 md:w-8 lg:h-9 lg:w-9 ${isExpanded ? "rotate-90" : ""}`}
          />
        </button>
      </div>

      <section
        className={`transform overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4">
          {children}
          <div className="my-3 flex w-full justify-between md:justify-end md:gap-7">
            <ButtonContained variant="generalPoppins" text="Guardar cambios" />
            <ButtonContained variant="text" text="Descartar" />
          </div>
        </div>
      </section>
    </LayoutCard>
  );
}
