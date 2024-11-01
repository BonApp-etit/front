import Form from "../../components/common_components/Form";
import InputTailwind from "@/components/common_components/InputTailwind";
import ButtonTailwind from "@/components/common_components/ButtonTailwind";

import NavBar from "@/components/NavBar/NavBar";

export default function SignUp() {
  return (
    <main>
      <NavBar />

      <Form
        tittle="Crear nueva contraseña"
        subtitleTop=""
        subtitleBottom=""
        src="/assets/CreatePassword/createPassword.svg"
        alt="SignUp"
      >
        <InputTailwind
          label="Nueva contraseña"
          placeholder="Ingresa tu nueva contraseña"
          type="password"
        />
        <InputTailwind
          label="Confirma tu contraseña"
          placeholder="Confirma tu nueva contraseña"
          type="password"
        />

        <div className="mb-5 mt-5 flex justify-center lg:mb-10">
          <ButtonTailwind text="Guardar y entrar"></ButtonTailwind>
        </div>
      </Form>
    </main>
  );
}
