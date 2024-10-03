import React from "react";
import CustomButton from "@/components/CustomButton";
import StyledButton from "@/components/StyledButton";
import StyledInput from "@/components/StyledInput";
import { Button } from "@mui/material";

import CustomInput from "@/components/CustomInput";
import { useTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("El correo electronico no es valido")
    .required("El correo es obligatorio"),
  verificationCode: Yup.string()
    .min(6, "El codigo debe tener al menos 6 caracteres")
    .required("El codigo es obligatorio"),
});

//import { Button } from '@mui/material';
export default function Verificacion_de_cuenta() {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      email: "",
      verificationCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Datos enviados:", values);
    },
  });

  return (
    <main className=" p-4 flex justify-center">
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
          <StyledButton
            tailwindClasses=""
            text="Enviar codigo de verificacion"
          />
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

            <StyledButton
              tailwindClasses="h-3"
              text="Verificar"
              variant="outlined"
            />
          </div>
        </div>
        {/**
 *  <CustomInput
          label="Correo"
          placeholder="Escribe tu correo"
          customWidth="150px"
          customHeight=" 50px"
        />

        <Button
          sx={{
            diseabled: true,
            textTransform: "none",
            color: "#000000",
            backgroundColor: "#d3a096",

            "&:hover": { background: "#77463d" },
            padding: "24px",
            borderRadius: "16px",
            disabled: true,
          }}
          variant="outlined"
        >
          Hola este es prueba
        </Button>

        <Button variant="contained">Este es uno sin sx</Button>

        <StyledButton>Este es un boton con styled</StyledButton>
 * 

 */}
      </div>
    </main>
  );
}
