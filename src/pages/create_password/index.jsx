import Form from "../../components/common_components/Form";
import InputContained from "@/components/common_components/InputContained";
import ButtonContained from "@/components/common_components/ButtonContained";
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
        <InputContained
          label="Nueva contraseña"
          placeholder="Ingresa tu nueva contraseña"
          type="password"
        />
        <InputContained
          label="Confirma tu contraseña"
          placeholder="Confirma tu nueva contraseña"
          type="password"
        />

        <div className="mb-5 mt-5 flex justify-center lg:mb-10">
          <ButtonContained text="Guardar y entrar"></ButtonContained>
        </div>
      </Form>
    </main>
  );
}
