import Input from '../../components/common_components/StyledInput'
import { Button } from "@mui/material";
export default function form(){
    return(
        <main className="flex flex-col  font-poppins lg:ml-[100px] md:mt-8">
            <h3 className="text-[28px] font-semibold font-poppins">Registrate</h3>
            <p className="text-[12px] mb-2">Registrate y dile que si a mil clientes satisfechos</p>
            <h2 classhName="text-[16px] font-light">Nombre Completo</h2>
            <Input
            customWidth="478px"
            customHeight="46px"
            className="my-2"
            placeholder="Ingresa tu nombre completo"
            />
            <h2 classhName="text-[16px]         font-light">Correo electronico</h2>
            <Input
            customWidth="478px"
            customHeight="46px"
            className="my-2"
            placeholder="Ingresa tu correo"
            />
            <h2 classhName="text-[16px]         font-light">Contraseña</h2>
            <Input
            customWidth="478px"
            customHeight="46px"
            className="my-2"
            placeholder="Ingresa tu contraseña"
            />
            <div className='flex items-center justify-center'>
            <Button variant="contained" className='mt-4 font-poppins text-[16px]'>REGISTRARSE →</Button>
            </div>
            
        </main>
    )
}