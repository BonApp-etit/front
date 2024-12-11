import * as React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import theme from "../styles/theme";
import "@/styles/globals.css";
import { Poppins, Roboto, Work_Sans, Ubuntu } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";

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
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${poppins.variable} ${ubuntu.variable} ${roboto.variable} ${workSans.variable} font-sans`}
    >
      <ThemeProvider theme={theme}>
        {" "}
        {/**Configuraciones de Material UI */}
        <CssBaseline />
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
