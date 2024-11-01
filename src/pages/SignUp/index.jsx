import Form from "../../components/common_components/Form";
import InputTailwind from "@/components/common_components/InputTailwind";
import ButtonTailwind from "@/components/common_components/ButtonTailwind";
import SignInOPtions from "@/components/common_components/SignInOptions";

import NavBar from "@/components/NavBar/NavBar";

export default function SignUp() {
  return (
    <main>
      <NavBar />

      <Form
        tittle="Registrate"
        subtitleTop=""
        subtitleBottom="Registrate y dile que si a miles de clientes satisfechos"
        src="/assets/SignUp/SignUp.svg"
        alt="SignUp"
      >
        <InputTailwind
          label="Nombre completo"
          placeholder="Ingresa tu nombre completo"
          type="text"
        />
        <InputTailwind
          label="Correo electronico"
          placeholder="Ingresa tu correo electronico"
          type="text"
        />

        <InputTailwind
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          type="text"
        />
        <div className="mb-5 mt-5 flex justify-center lg:mb-10">
          <ButtonTailwind text="Registrarse"></ButtonTailwind>
        </div>

        <SignInOPtions />
      </Form>
    </main>
  );
}
