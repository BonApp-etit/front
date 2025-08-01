import Input from '@/components/common_components/Input'
import ButtonContained from '@/components/common_components/ButtonContained'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { loginSchema } from '@/hooks/validationSchemas'
import Link from 'next/link'

export default function LoginForm() {
  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      const data = await response.json()

      if (data.success) {
        console.log('Sesion iniciada')
        const token = data.message.data?.token
        if (token) {
          localStorage.setItem('authToken', token)
          console.log('Token guardado en local storage')
          router.push('/administration_menu')
        } else {
          setErrors({ general: 'Error de autenticacion' })
        }

        // Guardar token en el navegador
      } else {
        if (data.message === 'Account not verified') {
          setErrors({ general: 'Cuenta no verificada. Redirigiendo...' })
          router.push('/account_verification')
        } else if (data.message === 'Invalid data') {
          setErrors({ general: 'Correo o contraseña incorrectos' })
        } else {
          setErrors({ general: 'Ocurrio un error inesperado' })
        }
      }

      setSubmitting(false)
    } catch (error) {
      setSubmitting(false)
      console.error('Error de conexion', error)
      console.log('Catch del cliente')
      setErrors({ general: 'Ocurrio un error inesperado' })
    }
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={handleLogin}
    >
      {({ errors, isSubmitting }) => (
        <Form>
          <Input
            name="email"
            type="email"
            label="Correo electronico"
            placeholder="Ingresa tu correo electronico"
          />

          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label className="font-poppins text-sm font-light text-black md:text-base lg:text-lg">
                Contraseña
              </label>
              <Link
                href="/reset_password"
                className="font-poppins text-xs text-black/50 hover:underline md:text-base lg:text-base"
              >
                Olvidaste tu contraseña?
              </Link>
            </div>
            <Input
              name="password"
              type="password"
              label=""
              placeholder="Ingresa tu contraseña"
            />
          </div>
          {errors.general && (
            <p className="font-roboto text-sm text-red-500 md:text-base lg:text-lg">
              {errors.general}
            </p>
          )}
          <div className="mb-5 mt-5 flex justify-center lg:mb-10">
            <ButtonContained
              variant={'generalPoppins'}
              text={isSubmitting ? 'Enviando' : 'Entrar'}
              type="submit"
              showIcon={true}
              isArrowLeft={false}
              disabled={isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}
