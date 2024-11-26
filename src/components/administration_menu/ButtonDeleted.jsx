import { XMarkIcon } from "@heroicons/react/24/outline";
export default function ButtonDeleted() {
  return (
    <button className="w-6 rounded-full bg-[#e01e1e] p-1 lg:w-7">
      <span>
        <XMarkIcon
          strokeWidth={2}
          className="h-4 w-4 text-black lg:h-5 lg:w-5"
        ></XMarkIcon>
      </span>
    </button>
  );
}
