export default function InputContained({ label, placeholder, type, ...props }) {
  return (
    <div className="mb-1">
      <label
        htmlFor={label}
        className="font-poppins text-sm font-light text-black md:text-base lg:text-lg"
      >
        {label}
      </label>

      <input
        id={label}
        type={type}
        placeholder={placeholder}
        {...props}
        className="mt-1 w-full rounded-lg border border-[#FFF6F4] bg-[#FFF6F4] px-4 py-2 font-poppins text-xs font-normal text-black placeholder:text-black/50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cs500 md:text-sm lg:text-base"
      />
    </div>
  );
}
