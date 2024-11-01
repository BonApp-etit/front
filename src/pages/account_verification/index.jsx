import Form from "../../components/common_components/Form";
import InputContained from "@/components/common_components/InputContained";
import ButtonContained from "@/components/common_components/ButtonContained";
import useIsTablet from "@/hooks/useIsTablet";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { verificationCodeSchema } from "@/hooks/validationSchemas";
import NavBar from "@/components/NavBar/NavBar";

export default function SignUp() {
  const isTablet = useIsTablet();
  return (
    <main>
      <NavBar />
      <Formik
        initialValues={{ email: "", verificationCode: "" }}
        validationSchema={verificationCodeSchema}
        onSubmit={(values) => {
          console.log("Datos del formulario", values);
        }}
      >
        {({ handleSubmit }) => (
          <Form
            tittle="Verifica tu cuenta"
            subtitleTop=""
            subtitleBottom="Ingresa tu correo electronico para recibir tu codigo de verificacion "
            src="/assets/Authentication/Authentication.svg"
            alt="SignUp"
          >
            <FormikForm onSubmit={handleSubmit}>
              <div>
                <Field
                  name="email"
                  as={InputContained}
                  label="Correo electrónico"
                  placeholder="Ingresa tu correo electrónico"
                  type="text"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                />
              </div>

              <div className="mb-5 mt-5 flex justify-center lg:mb-10">
                <ButtonContained
                  type="submit"
                  text="Enviar codigo de verificacion"
                ></ButtonContained>
              </div>
              {isTablet ? (
                <div className="flex items-center gap-2">
                  <div>
                    <Field
                      name="verificationCode"
                      as={InputContained}
                      label="Codigo de verificacion"
                      placeholder="Ingresa tu codigo de verificacion"
                      type="text"
                    />
                    <ErrorMessage
                      name="verificationCode"
                      component="p"
                      className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                    />
                  </div>

                  <div className="mb-0">
                    <ButtonContained
                      type="submit"
                      text="Verificar"
                    ></ButtonContained>
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    <Field
                      name="verificationCode"
                      as={InputContained}
                      label="Codigo de verificacion"
                      placeholder="Ingresa tu codigo de verificacion"
                      type="text"
                    />
                    <ErrorMessage
                      name="verificationCode"
                      component="p"
                      className="font-roboto text-sm text-red-500 md:text-base lg:text-lg"
                    />
                  </div>
                  <div className="mb-5 mt-5 flex justify-center lg:mb-10">
                    <ButtonContained
                      type="submit"
                      text="Verificar"
                    ></ButtonContained>
                  </div>
                </div>
              )}
            </FormikForm>
          </Form>
        )}
      </Formik>
    </main>
  );
}
