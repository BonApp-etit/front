import Image from "next/image";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
export default function First() {
  const theme = useTheme();
  return (
    <section className=" lg:bg-[#FFF1ED] lg:px-16 lg:py-[98px] lg:flex lg:justify-center  lg:w-full md:bg-white  px-[90px] ">
      {/* Contenedor exterior que extiende el fondo */}

      <div className="lg:flex lg:justify-between md:flex md:flex-col md:items-center ">
        <div>
          {/**Title and subtittle */}
          <div className=" lg:mb-12 md:text-center md:mb-9 ">
            <h1 className="lg:text-[64px] lg:font-bold lg:text-black lg:font-roboto md:text-[50px] md:font-bold md:font-poppins  ">
              Ordena fácilmente, disfruta rápidamente
            </h1>
            <p className="lg:text-black lg:text-2xl lg:font-normal lg:font-roboto md:text-xl md:font-normal md:font-roboto   ">
              Ordena lo que te gusta en pocos pasos y disfruta de tu comida sin
              esperar.
            </p>
          </div>
          {/** Button and recomendations */}

          <div className="mb-7 md:flex md:justify-center py-">
            <Button
              variant="contained"
              sx={{
                [theme.breakpoints.down("lg")]: {
                  borderRadius: "45px",
                  py: "18px",
                  px: "32px",
                  fontSize: "1rem",
                  fontWeight: "700",
                },

                [theme.breakpoints.down("md")]: {
                  py: "12px", // Cambios para tablet (menor a 768px)
                  px: "24px",
                },
                [theme.breakpoints.down("sm")]: {
                  py: "8px", // Cambios para móviles pequeños (menor a 640px)
                  px: "16px",
                },
              }}
            >
              ¡Solicita una demo!
            </Button>
          </div>

          <div className="flex justify-start">
            <div className="flex -space-x-6 ">
              <Image
                src="/assets/pp1.svg"
                alt="User1"
                width={63}
                height={63}
                className=" rounded-full border-2 border-white"
              />
              <Image
                src="/assets/pp2.svg"
                alt="User2"
                width={63}
                height={63}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/assets/pp3.svg"
                alt="User3"
                width={63}
                height={63}
                className="rounded-full border-2 border-white"
              />
            </div>
            <div className=" flex flex-col ext-xl font-roboto items-center ">
              <span className="font-bold  text-black">
                Nuestros usuarios felices
              </span>
              <span className="text-black/50  font-normal ">
                ⭐ 4.8 (450+ reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Chef Image */}
        <div className="mt-[10px] lg:mt-0 md:mt-10">
          <Image width={550} height={440} src="/assets/first.svg" alt="Chef" />
        </div>
      </div>
    </section>
  );
}
