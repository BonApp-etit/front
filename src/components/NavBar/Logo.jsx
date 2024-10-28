import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-5 md:w-6 lg:w-7">
        <Image
          width={40}
          height={40}
          src="/assets/NavBar/Logo.svg"
          alt="Logo"
          layout="responsive"
        />
      </div>

      <h1 className="font-poppins text-xl font-semibold text-cstext md:text-2xl lg:text-[28px]">
        Bon App-etit
      </h1>
    </div>
  );
}
