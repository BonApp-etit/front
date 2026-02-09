import Form from '../../components/common_components/Form'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LoginForm from '@/components/Forms/LoginForm'

export default function Login() {
  const router = useRouter()

  return (
    <main className="mx-auto px-4 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-7xl lg:px-14">
      <Form
        tittle="Iniciar sesión"
        subtitleTop="¡Bienvenido de vuelta!"
        subtitleBottom=""
        src="/assets/Login/chef.svg"
        alt="LoginChefImage"
      >
        <LoginForm />

        <div className="flex justify-center gap-2">
          <p className="font-poppins text-xs font-normal leading-snug tracking-tight text-black/50 md:text-base">
            ¿Aun no estás registrado?
          </p>
          <Link
            className="font-poppins text-xs font-normal leading-snug tracking-tight text-cs500 hover:underline md:text-base"
            href="/sign_up"
          >
            Crear cuenta
          </Link>
        </div>
      </Form>
    </main>
  )
}
