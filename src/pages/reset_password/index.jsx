import Form from "../../components/common_components/Form";
import InputTailwind from "@/components/common_components/InputTailwind";
import ButtonTailwind from "@/components/common_components/ButtonTailwind";
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
        src="/assets/ResetPassword/ForgotPassword.svg"
        alt="SignUp"
      >
        <InputTailwind
          label="Correo"
          placeholder="Ingresa tu correo electronico"
          type="text"
        />

        <div className="mb-5 mt-5 flex justify-center lg:mb-10">
          <ButtonTailwind text="Enviar codigo de verificacion"></ButtonTailwind>
        </div>
        {isTablet ? (
          <div className="flex items-center gap-2">
            <InputTailwind
              label="Ingresa tu codigo de verificacion"
              placeholder="Ingresa tu codigo de verificacion"
              type="text"
            />

            <div className="mb-0">
              <ButtonTailwind text="Verificar"></ButtonTailwind>
            </div>
          </div>
        ) : (
          <div>
            <InputTailwind
              label="Ingresa tu codigo de verificacion"
              placeholder="Ingresa tu codigo de verificacion"
              type="text"
            />

            <div className="mb-5 mt-5 flex justify-center lg:mb-10">
              <ButtonTailwind text="Verificar"></ButtonTailwind>
            </div>
          </div>
        )}
      </Form>
    </main>
  );
}
