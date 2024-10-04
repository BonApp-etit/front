import StyledInput from "@/components/verification/StyledInput";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function VerificationForm() {
  const theme = useTheme();
  return (
    <section className="flex justify-center">
      <div className="gap-4 flex flex-col shadow  rounded-xl w-[360px] p-4 h-96">
        <div className=" flex justify-start flex-col ">
          <h1 className="text-black text-[28px] font-semibold font-poppins">
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
