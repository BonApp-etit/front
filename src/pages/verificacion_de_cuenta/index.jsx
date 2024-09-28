import React from 'react';
import { Container } from '@mui/material';
import CustomButton from "@/components/CustomButton"
import { Button } from '@mui/material';
export default function verificacion_de_cuenta(){
    return (
        <main className="flex justify-center">
            <div className="gap-2">
            <div className="text-black text-[28px] font-semibold font-poppins">Verifica tu cuenta</div>
            <div className="text-black/50 text-xs font-normal font-poppins leading-[11px] tracking-tight">Ingresa tu corrreo o numero de telefono para<br/>recibir tu codigo de verificacion. </div>

            <div>
                <Container>
                    <CustomButton
                     
                     text="Enviar codigo de verificacion" 
                     uppercase={false} 
                     //fontFamily="poppins"
                     tailwindClasses="p-2 bg-red-600 hover:bg-red-700 rounded-md shadow-md font-poppins "
                    >
                    </CustomButton>
                </Container>
               
            </div>

{/**
            <div>
                <h1>¡Bienvenido a mi aplicación Next.js con Material UI!</h1>
                 <Button variant="contained" color="secondary">
                    Haz clic aquí
                </Button>
            </div>

 */}
           
            </div>
            
        </main>
    )
}