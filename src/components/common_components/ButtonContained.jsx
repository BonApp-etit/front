import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function ButtonContained({
  text,
  type,
  tailwindClasses,
  showIcon,
  variant,
}) {
  return (
    <main>
      {variant === "generalPoppins" && (
        <button
          type={type}
          className={`flex items-center justify-center rounded-lg bg-cs500 px-3 py-2 font-poppins text-sm font-semibold text-white shadow-md transition-all duration-150 ease-in-out hover:bg-cs700 hover:shadow-2xl active:bg-cs900 active:shadow-none md:text-base lg:text-lg ${tailwindClasses}`}
        >
          <span>{text}</span>
          {showIcon && <ArrowRightIcon className="ml-2 h-5 w-5" />}
        </button>
      )}

      {variant === "generalUbuntu" && (
        <button
          type={type}
          text="Editar producto"
          className={`mx-auto rounded-[8px] bg-cs500 px-[4px] py-[7px] font-ubuntu text-[10px] font-medium text-white shadow-md transition-all duration-150 ease-in-out hover:bg-cs700 hover:shadow-2xl active:bg-cs900 active:shadow-none md:text-sm lg:text-base ${tailwindClasses}`}
        >
          <span>{text}</span>
        </button>
      )}
    </main>
  );
}