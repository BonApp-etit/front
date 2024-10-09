import Image from "next/image";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
export default function First() {
  const theme = useTheme();
  const recomendations = useMediaQuery("(min-width:1200px)");
  return (
    <section className=" lg:bg-[#FFF1ED] lg:py-24 flex justify-center p-4">
      {/* Contenedor exterior que extiende el fondo */}

      <div className=" sm:max-w-96 md:max-w-3xl  md:px-24 lg:flex lg:justify-evenly  lg:items-center lg:max-w-7xl lg:px-[50px] ">
        <div className=" lg:flex lg:flex-col ">
          {/**Title and subtittle */}
          <div className=" mb-8 gap-4 text-black   flex flex-col md:mt-8 md:text-center sm:text-center xs:text-center lg:text-left lg:gap-4  lg:mb-12 ">
            <h1 className="  text-3xl font-bold font-roboto  md:text-5xl md:font-poppins lg:text-[64px] lg:font-roboto">
              Ordena fácilmente, disfruta rápidamente
            </h1>
            <p className=" text-base font-normal font-roboto md:text-xl lg:text-2xl  ">
              Ordena lo que te gusta en pocos pasos y disfruta de tu comida sin
              esperar.
            </p>
          </div>
          {/** Button and recomendations */}

          <div className=" flex justify-center mb-10 lg:justify-start">
            <Button
              variant="contained"
              sx={{
                [theme.breakpoints.up("lg")]: {
                  borderRadius: "45px",
                  py: "18px",
                  px: "32px",
                  fontSize: "1rem",
                  fontWeight: "700",
                },
                [theme.breakpoints.between("md", "lg")]: {
                  py: "12px", // Cambios para tablet (menor a 768px)
                  px: "32px",
                  borderRadius: "45px",
                  fontSize: "1rem",
                  fontWeight: "700",
                },
                [theme.breakpoints.between("sm", "md")]: {
                  py: "12px", // Cambios para tablet (menor a 768px)
                  px: "32px",
                  borderRadius: "45px",
                  fontSize: "1rem",
                  fontWeight: "700",
                },
                [theme.breakpoints.down("sm")]: {
                  py: "12px", // Cambios para tablet (menor a 768px)
                  px: "32px",
                  borderRadius: "45px",
                  fontSize: "1rem",
                  fontWeight: "700",
                },
              }}
            >
              ¡Solicita una demo!
            </Button>
          </div>

          {recomendations && (
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
          )}
        </div>

        {/* Right Side: Chef Image */}
        <div className=" mx-auto w-80 h-auto md:w-[550px] lg:w-[750px]  ">
          <Image
            width={550}
            height={440}
            src="/assets/first.svg"
            alt="Chef"
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}

{
  /**
   *
   *
   */
}
