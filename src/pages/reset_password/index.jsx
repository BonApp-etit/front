import Form from "../../components/common_components/Form";
import InputContained from "@/components/common_components/InputContained";
import ButtonContained from "@/components/common_components/ButtonContained";
import useIsTablet from "@/hooks/useIsTablet";

import NavBar from "@/components/NavBar/NavBar";

export default function ResetPassword() {
  const isTablet = useIsTablet();
  return (
    <main>
      <NavBar />

      <Form
        tittle="Recuperacion de contraseña"
        subtitleTop=""
        subtitleBottom="Ingresa tu correo electronico para recibir tu codigo de verificacion "
        src="/assets/ResetPassword/resetPassword.svg"
        alt="SignUp"
      >
        <InputContained
          label="Correo"
          placeholder="Ingresa tu correo electronico"
          type="text"
        />

        <div className="mb-5 mt-5 flex justify-center lg:mb-10">
          <ButtonContained text="Enviar codigo de verificacion"></ButtonContained>
        </div>
        {isTablet ? (
          <div className="flex items-center gap-2">
            <InputContained
              label="Ingresa tu codigo de verificacion"
              placeholder="Ingresa tu codigo de verificacion"
              type="text"
            />

            <div className="mb-0">
              <ButtonContained text="Verificar"></ButtonContained>
            </div>
          </div>
        ) : (
          <div>
            <InputContained
              label="Ingresa tu codigo de verificacion"
              placeholder="Ingresa tu codigo de verificacion"
              type="text"
            />

            <div className="mb-5 mt-5 flex justify-center lg:mb-10">
              <ButtonContained text="Verificar"></ButtonContained>
            </div>
          </div>
        )}
      </Form>
    </main>
  );
}
