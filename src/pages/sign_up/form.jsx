import Input from '../../components/common_components/StyledInput'
import { Button } from "@mui/material";
export default function form(){
    return(
        <main className="flex flex-col font-poppins ml-[100px]">
            <h3 className="text-[28px] font-semibold font-poppins">Registrate</h3>
            <p className="text-[12px]">Registrate y dile que si a mil clientes satisfechos</p>
            <h2 classhName="text-[16px]         font-light">Nombre Completo</h2>
            <Input
            customWidth="478px"
            customHeight="46px"
            placeholder="Ingresa tu nombre completo"
            />
            <h2 classhName="text-[16px]         font-light">Correo electronico</h2>
            <Input
            customWidth="478px"
            customHeight="46px"
            placeholder="Ingresa tu correo"
            />
            <h2 classhName="text-[16px]         font-light">Contraseña</h2>
            <Input
            customWidth="478px"
            customHeight="46px"
            placeholder="Ingresa tu correo"
            />
            <Button variant="contained" className='mt-4 font-poppins text-[16px]'>REGISTRARSE →</Button>
        </main>
    )
}