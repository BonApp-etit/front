// validationSchemas.js
import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Correo inválido").required("Correo requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Contraseña requerida"),
});

export const registerSchema = Yup.object({
  username: Yup.string().required("Nombre de usuario requerido"),
  email: Yup.string().email("Correo inválido").required("Correo requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Contraseña requerida"),
});

export const verificationCodeSchema = Yup.object({
  email: Yup.string().email("Correo invalido").required("Correo requerido"),
  verificationCode: Yup.string()
    .required("Codigo de verificacion requerido")
    .min(5, "El codigo de verificacion debe ser de 5 digitos ")
    .max(5, "El codigo de verificacion debe ser de 5 digitos"),
});
