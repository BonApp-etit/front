import Form from "../../components/common_components/Form";
import InputContained from "@/components/common_components/InputContained";
import ButtonContained from "@/components/common_components/ButtonContained";
import NavBar from "@/components/NavBar/NavBar";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { passwordVerificationSchema } from "@/hooks/validationSchemas";

export default function CreatePassword() {
  return (
    <main>
      <NavBar />

      <Formik
        initialValues={{ password: "", passwordConfirmation: "" }}
        validationSchema={passwordVerificationSchema}
        onSubmit={(values) => {
          console.log("Datos del formulario", values);
        }}
      >
        {({ handleSubmit }) => (
          <Form
            tittle="Crear nueva contraseña"
            subtitleTop=""
            subtitleBottom=""
            src="/assets/CreatePassword/createPassword.svg"
            alt="createPasswordImage"
          >
            <FormikForm onSubmit={handleSubmit}>
              <div>
                <Field
                  label="Contraseña"
                  name="password"
                  as={InputContained}
                  placeholder="Ingresa tu contraseña"
                  type="password"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                />
              </div>

              <div>
                <Field
                  label="Confirma tu contraseña"
                  name="passwordConfirmation"
                  as={InputContained}
                  placeholder="Confirma tu nueva contraseña"
                  type="password"
                />
                <ErrorMessage
                  name="passwordConfirmation"
                  component="p"
                  className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                />
              </div>

              <div className="mb-5 mt-5 flex justify-center lg:mb-10">
                <ButtonContained text="Guardar y entrar"></ButtonContained>
              </div>
            </FormikForm>
          </Form>
        )}
      </Formik>
    </main>
  );
}
