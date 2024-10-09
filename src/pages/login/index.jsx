import { Button } from "@mui/material";
import StyledInput from "@/components/common_components/StyledInput";
import { ArrowForward } from "@mui/icons-material";
import Image from "next/image";

export default function Login() {
  return (
    <section className=" flex flex-col items-center w-full  lg:flex-row-reverse lg:justify-evenly lg:items-end">
      <div className=" shadow-lg p-4 rounded-xl md:px-16 md:w-[600px] ">
        <div className="mt-16 ">
          <h6 className="text-black/50 text-xs font-normal font-poppins leading-3 tracking-tight md:text-base md:mb-3 ">
            Bienvenido de vuelta!!
          </h6>
          <h1 className="text-black text-3xl font-semibold font-poppins md:text-6xl md:mb-7">
            Iniciar sesion
          </h1>
        </div>

        {/**Form */}
        <div className="">
          <div className="flex flex-col ">
            <label
              htmlFor="email"
              className="text-black  text-base font-poppins font-light" // verificar por que
            >
              Correo
            </label>
            <StyledInput
              customWidth="100%"
              customHeight="30px"
              placeholder="Ingresa tu correo"
              sx={{ mb: "15px" }}
            />
            <div className="flex justify-between  items-center ">
              <label
                htmlFor="Contraseña"
                className="text-black  text-base font-poppins font-light " // verificar por que
              >
                Contraseña
              </label>
              <p className="text-black text-xs font-light font-poppins opacity-50 lg:text-sm">
                ¿Ovidaste tu contraseña
              </p>
            </div>

            <StyledInput
              customWidth="100%"
              customHeight="30px"
              placeholder="************"
              mb="20px"
            />
          </div>

          <div className="flex justify-center mt-5 mb-5 lg:mb-10">
            <Button
              endIcon={<ArrowForward />}
              sx={{
                borderRadius: "12px",
                py: { sm: "4px", md: "8px" },
                px: "28px",
                fontWeight: "700",
                fontSize: "14px",
              }}
              variant="contained"
            >
              Entrar
            </Button>
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-3 md:mb-20">
            <p className="text-black/20 text-sm font-normal font-poppins leading-3 tracking-wide">
              ¿Aun no estas registrado?
            </p>
            <p className="text-cs500 text-sm font-normal font-poppins leading-3 tracking-wide">
              Crear cuenta
            </p>
          </div>
        </div>
        {/**Fin form */}
      </div>

      <div className="w-72 md:w-[400px]">
        <Image
          width={550}
          height={440}
          src="/assets/login/chef.svg"
          alt="Chef"
          layout="responsive"
        />
      </div>
    </section>
  );
}
