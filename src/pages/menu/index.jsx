import { Button } from "@mui/material";
import CardMenu from "@/components/common_components/CardMenu";
import ButtonGroupCustomized from "@/components/common_components/ButtonGroupCustomized";
export default function Menu() {
  return (
    <>
      <ButtonGroupCustomized className="shadow-lg" variant="outlined">
        <Button>Comprar de nuevo</Button>
        <Button>Entradas</Button>
        <Button>Bebidas</Button>
        <Button>Platillos</Button>
        <Button>Postres</Button>
      </ButtonGroupCustomized>

      <CardMenu></CardMenu>
    </>
  );
}
