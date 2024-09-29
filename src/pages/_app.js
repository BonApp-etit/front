import * as React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
const theme = createTheme({ // Colores personalizados para Material UI
  palette: {
    primary: {
      main: '#ff441f', // Color azul personalizado
    },
    secondary: {
      main: '#ffffff', // Color tomate personalizado
    },
  },
});
import "@/styles/globals.css";
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "500",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "500",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} font-sans`}>
      
      <ThemeProvider theme={theme}> {/**Configuraciones de Material UI */}
      <CssBaseline />
      <Component {...pageProps} />
      
      </ThemeProvider>
    </main>
      
  );
}
