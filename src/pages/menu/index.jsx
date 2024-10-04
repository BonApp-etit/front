import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
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
    </>
  );
}
