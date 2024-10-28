import Image from "next/image";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Fifth() {
  const theme = useTheme();
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col items-center sm:p-8 md:p-4 text-center w-full  sm:max-w-md  md:max-w-3xl lg:flex-row-reverse lg:max-w-7xl   lg:justify-between lg:text-start lg:p-10">
          <div className="lg:w-1/2">
            <h2 className=" text-black text-2xl font-bold font-poppins mb-4    md:text-3xl lg:text-5xl  lg:mb-12 ">
              Descubre la forma más fácil de disfrutar tus platos favoritos, sin
              complicaciones ni esperas.
            </h2>

            <Button
              variant="contained"
              className=" mb-12 font-roboto md:mb-8"
              sx={{
                [theme.breakpoints.up("lg")]: {
                  borderRadius: "45px",
                  p: "20px",
                  fontSize: "27px",
                  fontWeight: "700",
                },
                [theme.breakpoints.between("md", "lg")]: {
                  p: "15px",
                  fontWeight: "700",
                  fontSize: "20px",
                  borderRadius: "34px",
                },
                [theme.breakpoints.between("sm", "md")]: {
                  p: "11px",
                  fontWeight: "700",
                  fontSize: "16px",
                  borderRadius: "25px",
                },
                [theme.breakpoints.down("sm")]: {
                  p: "11px",
                  fontWeight: "700",
                  fontSize: "16px",
                  borderRadius: "25px",
                },
              }}
            >
              Unete ahora
            </Button>
          </div>

          <div className="w-full sm:w-48 md:w-96 lg:w-[512px]  h-auto lg:mr-24">
            <Image
              src="/assets/chef.svg"
              width="190"
              height="280"
              layout="responsive"
              alt="Chef"
            />
          </div>
        </div>
      </div>
    </>
  );
}
