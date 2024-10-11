import { Box } from "@mui/material";
import { Typography } from "@mui/material";
export default function Title() {
  return (
    <section>
      <h1 className="text-[#7f110f] text-lg font-semibold font-poppins leading-7 tracking-tight md:text-3xl lg:text-[40px] ">
        Mr. Burguer
      </h1>
      <h2 className="text-black text-xs font-semibold font-poppins md:text-lg lg:text-xl">
        ¡Hola John Doue, Bienvenido!
      </h2>
    </section>
    /**
     *     <Box>
      <Typography variant="h6" component="h1" sx={{ fontFamily: "poppins" }}>
        Mr. Burguer
      </Typography>

      <Typography variant="subtitle1" sx={{ fontFamily: "poppins" }}>
        ¡Hola John Doue, Bienvenido!
      </Typography>
    </Box>
     * 

     */
  );
}
