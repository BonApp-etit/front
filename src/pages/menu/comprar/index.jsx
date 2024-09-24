import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <>
      <h1 className="font-poppins text- text-main">Aqui debe ir comprar</h1>
      <h1 className="font-poppins text-[18px] text-main">Aqui debe ir</h1>
      <p className="font-roboto text-second">Parrfo para roboto</p>
      <p className="font-roboto text-black/60">Parrfo para roboto</p>
      <Link href="/">ir a la landing</Link>
      <Link href="/menu">ir al menu</Link>
    </>
  );
}
