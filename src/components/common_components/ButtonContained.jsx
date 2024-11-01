import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function ButtonContained({ text }) {
  return (
    <button className="flex items-center justify-center rounded-lg bg-cs500 px-3 py-2 font-poppins text-sm font-semibold text-white shadow-md transition-all duration-150 ease-in-out hover:bg-cs700 hover:shadow-2xl active:bg-cs900 active:shadow-none md:text-base lg:text-lg">
      <span>{text}</span>
      <ArrowRightIcon className="ml-2 h-5 w-5" />
    </button>
  );
}
