import Form from "../../components/common_components/Form";
import InputContained from "@/components/common_components/InputContained";
import ButtonContained from "@/components/common_components/ButtonContained";
import SignUpOptions from "@/components/common_components/SignUpOptions";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { registerSchema } from "@/hooks/validationSchemas";

import NavBar from "@/components/NavBar/NavBar";

export default function SignUp() {
  return (
    <main>
      <NavBar />

      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          console.log("Datos del formulario", values);
        }}
      >
        {({ handleSubmit }) => (
          <Form
            tittle="Registrate"
            subtitleTop=""
            subtitleBottom="Registrate y dile que si a miles de clientes satisfechos"
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

              <div className="mb-5 mt-5 flex justify-center lg:mb-10">
                <ButtonContained
                  type="submit"
                  text="Registrarse"
                ></ButtonContained>
              </div>

              <SignUpOptions />
            </FormikForm>
          </Form>
        )}
      </Formik>
    </main>
  );
}
