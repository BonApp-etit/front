import Form from "../../components/common_components/Form";
import InputContained from "@/components/common_components/InputContained";
import ButtonContained from "@/components/common_components/ButtonContained";
import SignUpOptions from "@/components/common_components/SignUpOptions";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { registerSchema } from "@/hooks/validationSchemas";
import NavBar from "@/components/NavBar/NavBar";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
  // Definición de la función handleSignUp
  const handleSignUp = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      setSubmitting(false); // Finaliza el estado de envio del formulario
      if (data.success) {
        console.log("Datos guardados en la DB");
        router.push("/account_verification");
      } else {
        console.log("Algo paso");
        // Si hay un error, muestra el mensaje en el formulario
        setErrors({ general: data.message || "Ocurrió un error inesperado" });
      }

      // if (data.success) {
      //   const token = data.data.token;
      //   localStorage.setItem("authToken", token);
      //   console.log("Registro exitoso, token guardado en localStorage.");
      // } else {
      //   console.error("Error en el registro:", data.error);
      // }
    } catch (error) {
      setSubmitting(false);
      console.error("Error de conexión:", error);
      setErrors({ general: "Error al conectar con el servidor" });
    }
  };

  return (
    <main>
      <NavBar />
      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        validationSchema={registerSchema}
        onSubmit={handleSignUp} // Asegúrate de que handleSignUp está bien definido y pasado correctamente
      >
        {({ handleSubmit, isSubmitting, errors }) => (
          <Form
            tittle="Regístrate"
            subtitleTop=""
            subtitleBottom="Regístrate y dile que sí a miles de clientes satisfechos"
            src="/assets/SignUp/SignUp.svg"
            alt="SignUp"
          >
            <FormikForm onSubmit={handleSubmit}>
              <div>
                <Field
                  name="username"
                  as={InputContained}
                  label="Nombre completo"
                  placeholder="Ingresa tu nombre completo"
                  type="text"
                />
                <ErrorMessage
                  name="username"
                  component="p"
                  className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                />
              </div>

              <div>
                <Field
                  name="email"
                  as={InputContained}
                  label="Correo electrónico"
                  placeholder="Ingresa tu correo electrónico"
                  type="email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                />
              </div>

              <div>
                <Field
                  name="password"
                  as={InputContained}
                  label="Contraseña"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                />
              </div>

              {/* Mensaje general de error */}
              {errors.general && (
                <p className="font-roboto text-sm text-red-500 md:text-base lg:text-lg">
                  {errors.general}
                </p>
              )}

              <div className="mb-5 mt-5 flex justify-center lg:mb-10">
                <ButtonContained
                  variant="generalPoppins"
                  type="submit"
                  text={isSubmitting ? "Cargando..." : "Registrarse"}
                  showIcon={true}
                  isArrowLeft={false}
                  disabled={isSubmitting} // Desactiva el botón mientras se procesa el envío
                />
              </div>

              <SignUpOptions />
            </FormikForm>
          </Form>
        )}
      </Formik>
    </main>
  );
}
