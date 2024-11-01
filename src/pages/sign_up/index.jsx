import Form from "../../components/common_components/Form";
import InputContained from "@/components/common_components/InputContained";
import ButtonContained from "@/components/common_components/ButtonContained";
import SignUpOptions from "@/components/common_components/SignUpOptions";

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
        <InputContained
          label="Nombre completo"
          placeholder="Ingresa tu nombre completo"
          type="text"
        />
        <InputContained
          label="Correo electronico"
          placeholder="Ingresa tu correo electronico"
          type="text"
        />

        <InputContained
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          type="password"
        />
        <div className="mb-5 mt-5 flex justify-center lg:mb-10">
          <ButtonContained text="Registrarse"></ButtonContained>
        </div>

        <SignUpOptions />
      </Form>
    </main>
  );
}
