import Image from "next/image";
export default function Logo() {
  return (
    <div className=" inline-flex gap-1 items-center">
      <Image width={35} height={35} src="/assets/NavBar/Logo.svg" alt="Logo" />
      <p className="text-black text-2xl font-semibold">Bon App-etit</p>
    </div>
  );
}
