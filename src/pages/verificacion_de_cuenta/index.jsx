import React from "react";
import VerificationForm from "@/components/verification/VerificationForm";
import Image from "next/image";
import autenticationImage from "./Authentication.svg";

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
export default function Verificacion_de_cuenta() {
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
    <main className="flex flex-col items-center lg:flex-row-reverse  lg:justify-center">
      <VerificationForm />

      <Image
        className="md:w-96 lg:w-[400px]"
        src={autenticationImage}
        alt="Imagen de autenticacion"
      />
    </main>
  );
}
