import React from "react";
import { Container } from "@mui/material";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";

//import { Button } from '@mui/material';
export default function verificacion_de_cuenta() {
  return (
    <main className=" p-4">
      <div className="gap-4 flex flex-col shadow-md p-2 rounded-md">
        <div className=" flex justify-start flex-col">
          <div className="text-black text-[28px] font-semibold font-poppins">
            Verifica tu cuenta
          </div>
          <div className="text-black/50 text-xs font-normal font-poppins leading-[11px] tracking-tight">
            Ingresa tu corrreo o numero de telefono para
            <br />
            recibir tu codigo de verificacion.{" "}
          </div>
        </div>

        <Container className="flex justify-center">
          <CustomButton
            text="Enviar codigo de verificacion"
            uppercase={false}
            tailwindClasses="rounded-lg shadow-md justify-center "
          ></CustomButton>
        </Container>

        {/**
            <div>
                <h1>¡Bienvenido a mi aplicación Next.js con Material UI!</h1>
                 <Button variant="contained" color="secondary">
                    Haz clic aquí
                </Button>
            </div>

 */}
      </div>
    </main>
  );
}
