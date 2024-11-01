import Form from "../../components/common_components/Form";
import InputTailwind from "@/components/common_components/InputTailwind";
import ButtonTailwind from "@/components/common_components/ButtonTailwind";

import NavBar from "@/components/NavBar/NavBar";

export default function SignUp() {
  return (
    <main>
      <NavBar />

      <Form
        tittle="Iniciar sesion"
        subtitleTop="Bienvenido de vuelta!!"
        subtitleBottom=""
        src="/assets/Login/chef.svg"
        alt="SignUp"
      >
        <InputTailwind
          label="Correo electronico"
          placeholder="Ingresa tu correo electronico"
          type="text"
        />

        {/* Contenedor para el Input y el componente adicional */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <label className="font-poppins text-sm font-light text-black md:text-base lg:text-lg">
              Contraseña
            </label>
            <a
              href="#"
              className="font-poppins text-xs text-black/50 hover:underline md:text-base lg:text-base"
            >
              Olvidaste tu contraseña?
            </a>
          </div>
          <InputTailwind placeholder="Ingresa tu contraseña" type="password" />
        </div>
        <div className="mb-5 mt-5 flex justify-center lg:mb-10">
          <ButtonTailwind text="Entrar"></ButtonTailwind>
        </div>
        <div className="flex justify-center gap-2">
          <p className="font-poppins text-xs font-normal leading-snug tracking-tight text-black/50 md:text-base">
            ¿Aun no estas registrado?
          </p>{" "}
          <a
            className="font-poppins text-xs font-normal leading-snug tracking-tight text-cs500 hover:underline md:text-base"
            href="#"
          >
            {" "}
            Crear cuenta
          </a>
        </div>
      </Form>
    </main>
  );
}
