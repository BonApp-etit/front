import StyledInput from "@/components/common_components/StyledInput";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function VerificationForm() {
  const theme = useTheme();
  return (
    <section className="flex justify-center w-1/2 ">
      <div className="gap-4 flex flex-col shadow-md p-4   rounded-xl md:w-[600px] md:px-16 md:pt-36 md:pb-28 w-[360px] lg:pb-48 lg:pt-24 lg:py-16 ">
        <div className=" flex justify-start flex-col ">
          <h1 className="text-black text-[28px] md:text-3xl font-semibold font-poppins">
            Verifica tu cuenta
          </h1>
          <div className="text-black/50 text-xs font-normal font-poppins leading-[11px] tracking-tight">
            Ingresa tu corrreo o numero de telefono para
            <br />
            recibir tu codigo de verificacion.{" "}
          </div>
        </div>
        {/**Correo  y btn enviar */}
        <div className="flex flex-col items-center">
          <div className="mb-3 flex flex-col w-full">
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
            />
          </div>
          <Button variant="contained">Enviar codigo de verificacion</Button>
        </div>

        {/**Codigo de verificacion*/}
        <div className="mt-3 ">
          <label
            htmlFor="email"
            className="text-black  text-base  font-poppins font-light"
          >
            Codigo de verificacion
          </label>
          <div className="flex justify-start gap-5">
            <StyledInput
              customWidth="170px"
              customHeight="30px"
              placeholder="Ingresa tu codigo"
            />

            <Button variant="contained">Verificar</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
