import Image from 'next/image'
import { Button } from '@mui/material'
import { useTheme } from '@emotion/react'

export default function CTA() {
  const theme = useTheme()
  return (
    <>
      <div className="mx-auto flex w-full flex-col items-center text-center sm:max-w-md sm:p-8 md:max-w-3xl md:p-0 lg:max-w-7xl lg:flex-row-reverse lg:justify-between lg:text-start">
        <div className="lg:w-1/2">
          <h2 className="mb-4 font-poppins text-2xl font-bold text-black md:text-3xl lg:mb-12 lg:text-5xl">
            Descubre la forma más fácil de disfrutar tus platos favoritos, sin
            complicaciones ni esperas.
          </h2>

          <Button
            variant="contained"
            className="mb-12 font-roboto md:mb-8"
            sx={{
              [theme.breakpoints.up('lg')]: {
                borderRadius: '45px',
                p: '20px',
                fontSize: '27px',
                fontWeight: '700',
              },
              [theme.breakpoints.between('md', 'lg')]: {
                p: '15px',
                fontWeight: '700',
                fontSize: '20px',
                borderRadius: '34px',
              },
              [theme.breakpoints.between('sm', 'md')]: {
                p: '11px',
                fontWeight: '700',
                fontSize: '16px',
                borderRadius: '25px',
              },
              [theme.breakpoints.down('sm')]: {
                p: '11px',
                fontWeight: '700',
                fontSize: '16px',
                borderRadius: '25px',
              },
            }}
          >
            Unete ahora
          </Button>
        </div>

        <Image
          src="/assets/chef.svg"
          width="190"
          height="280"
          alt="Chef"
          className="mx-auto h-auto sm:w-48 md:w-96 lg:w-[400px] xl:w-[512px]"
        />
      </div>
    </>
  )
}
