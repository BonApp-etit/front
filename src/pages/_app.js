import * as React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import theme from "../styles/theme";
import "@/styles/globals.css";
import { Poppins, Roboto, Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${poppins.variable} font-sans ${ubuntu.className} ${roboto.className}`}
    >
      <ThemeProvider theme={theme}>
        {" "}
        {/**Configuraciones de Material UI */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
