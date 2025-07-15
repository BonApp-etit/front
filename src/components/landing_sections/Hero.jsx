import Image from 'next/image'
import { Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import Rating from './Rating'
import Link from 'next/link'
export default function HeroSection() {
  const theme = useTheme()
  const recomendations = useMediaQuery('(min-width:1200px)')
  //#FFF1ED Color Fix
  return (
    <section className="lg:bg-[#FFF1ED] lg:px-14 lg:py-24">
      {/* Contenedor exterior que extiende el fondo */}

      <div className="mx-auto lg:flex lg:max-w-7xl lg:items-center lg:justify-evenly">
        <div>
          {/**Title and subtittle */}
          <div className="mb-8 mt-5 flex flex-col items-center gap-4 text-center font-roboto text-black md:mt-8 lg:mb-12 lg:gap-4 lg:text-left">
            <h1 className="text-3xl font-bold md:font-poppins md:text-5xl lg:font-roboto lg:text-6xl">
              Ordena fácilmente, disfruta rápidamente
            </h1>
            <p className="text-base font-normal md:text-xl lg:text-2xl">
              Ordena lo que te gusta en pocos pasos y disofruta de tu comida sin
              esperar.
            </p>
          </div>
          {/** Button and recomendations */}

          <div className="mb-10 flex justify-center lg:justify-start">
            <Link href="/sign_up" passHref>
              <Button
                variant="contained"
                sx={{
                  [theme.breakpoints.up('lg')]: {
                    borderRadius: '45px',
                    py: '18px',
                    px: '32px',
                    fontSize: '1rem',
                    fontWeight: '700',
                  },
                  [theme.breakpoints.between('md', 'lg')]: {
                    py: '12px',
                    px: '32px',
                    borderRadius: '45px',
                    fontSize: '1rem',
                    fontWeight: '700',
                  },
                  [theme.breakpoints.between('sm', 'md')]: {
                    py: '12px',
                    px: '32px',
                    borderRadius: '45px',
                    fontSize: '1rem',
                    fontWeight: '700',
                  },
                  [theme.breakpoints.down('sm')]: {
                    py: '12px',
                    px: '32px',
                    borderRadius: '45px',
                    fontSize: '1rem',
                    fontWeight: '700',
                  },
                }}
              >
                ¡Solicita una demo!
              </Button>
            </Link>
          </div>

          {recomendations && <Rating />}
        </div>

        {/* Right Side: Chef Image */}

        <Image
          width={550}
          height={440}
          src="/assets/first.svg"
          alt="Chef"
          className="mx-auto h-auto w-80 md:w-[550px] lg:w-[400px] xl:w-[600px]"
        />
      </div>
    </section>
  )
}
