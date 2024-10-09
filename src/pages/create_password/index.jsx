import CreatePassword from "@/components/create_password/CreatePassword";

export default function CreatePasswordPage() {
  return (
    <section>
      <CreatePassword
        tittle="Crear nueva contraseña"
        firstLabel="Nueva contraseña"
        secondLabel="Confirmar contraseña"
        text=""
        buttonMessage="Guarddar y entrar"
        pathImage="/assets/resetPassword/resetPassword.svg"
      ></CreatePassword>
    </section>
  );
}
