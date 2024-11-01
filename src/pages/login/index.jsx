import Form from "../../components/common_components/Form";
import InputContained from "@/components/common_components/InputContained";
import ButtonContained from "@/components/common_components/ButtonContained";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { loginSchema } from "@/hooks/validationSchemas";
import NavBar from "@/components/NavBar/NavBar";

export default function Login() {
  return (
    <main>
      <NavBar />

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          console.log("Datos del formulario", values);
        }}
      >
        {({ handleSubmit }) => (
          <Form
            tittle="Iniciar sesión"
            subtitleTop="Bienvenido de vuelta!!"
            subtitleBottom=""
            src="/assets/Login/chef.svg"
            alt="LoginChefImage"
          >
            <FormikForm onSubmit={handleSubmit}>
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

              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <label className="font-poppins text-sm font-light text-black md:text-base lg:text-lg">
                    Contraseña
                  </label>
                  <a
                    href="#"
                    className="font-poppins text-xs text-black/50 hover:underline md:text-base lg:text-base"
                  >
                    Olvidaste tu contraseña?
                  </a>
                </div>
                <div>
                  <Field
                    name="password"
                    as={InputContained}
                    placeholder="Ingresa tu contraseña"
                    type="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                  />
                </div>
              </div>

              <div className="mb-5 mt-5 flex justify-center lg:mb-10">
                <ButtonContained text="Entrar" type="submit" />
              </div>
            </FormikForm>

            <div className="flex justify-center gap-2">
              <p className="font-poppins text-xs font-normal leading-snug tracking-tight text-black/50 md:text-base">
                ¿Aun no estás registrado?
              </p>
              <a
                className="font-poppins text-xs font-normal leading-snug tracking-tight text-cs500 hover:underline md:text-base"
                href="#"
              >
                Crear cuenta
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
}
