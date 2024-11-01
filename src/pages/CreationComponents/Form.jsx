import Image from "next/image";

export default function Form({
  tittle,
  subtitleTop,
  subtitleBottom,
  children,
  src,
  alt,
}) {
  return (
    <section>
      <div className="mx-auto lg:mt-20 lg:w-[1200px]">
        <div className="flex w-full flex-col items-center justify-center lg:flex-row-reverse lg:justify-between">
          <div className="w-[328px] rounded-[20px] px-2 py-5 shadow-lg md:w-[632px] md:px-[70px] md:py-[50px] lg:w-[660px]">
            <div className="mb-2 flex flex-col gap-1">
              <h6 className="font-poppins text-xs font-normal leading-3 tracking-tight text-black/50 md:mb-3 md:text-base">
                {subtitleTop}
              </h6>
              <h1 className="font-poppins text-3xl font-semibold text-black md:text-4xl lg:text-5xl">
                {tittle}
              </h1>
              <h6 className="font-poppins text-xs font-normal leading-3 tracking-tight text-black/50 md:text-base lg:text-lg lg:leading-snug lg:tracking-wide">
                {subtitleBottom}
              </h6>
            </div>

            {/**Form */}
            <div className="mt-4">{children}</div>

            {/**Fin form */}
          </div>
          {/* Punto de control. Img 2div  */}
          <div className="mx-auto w-72 md:w-[400px]">
            <Image
              width={550}
              height={440}
              src={src}
              alt={alt}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
