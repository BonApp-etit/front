import { Button } from "@mui/material";
import CardMenu from "@/components/common_components/CardMenu";
import ButtonGroupCustomized from "@/components/common_components/ButtonGroupCustomized";
import Title from "@/components/menu/Title";
import SearchBar from "@/components/menu/SearchBar";
import Cart from "@/components/menu/Cart";
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
      <Title></Title>
      <SearchBar></SearchBar>
      <Cart></Cart>
    </>
  );
}
