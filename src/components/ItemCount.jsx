import { useContext, useState } from "react";
import { Button, Grid, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ items }) => {
  const { addToCart } = useContext(CartContext);
  const [cant, setCant] = useState(0);

  const onAdd = () => {
    setCant(cant + 1);
  };

  const onSubtract = () => {
    setCant(cant - 1);
  };

  return (
    <>
      <Grid templateColumns="0.3fr 2fr 0.3fr" marginTop="10">
        <IconButton
          size="sm"
          colorScheme="purple"
          aria-label="Restar Producto"
          icon={<MinusIcon />}
          onClick={onSubtract}
          isDisabled={cant <= 0}
        />
        <Button
          isDisabled={cant <= 0}
          size="sm"
          onClick={() => addToCart(items, cant)}
          variant="outline"
          colorScheme="purple"
        >
          Añadir al carrito - {cant}
        </Button>
        <IconButton
          isDisabled={cant >= items.stock}
          size="sm"
          colorScheme="purple"
          aria-label="Sumar Producto"
          icon={<AddIcon />}
          onClick={onAdd}
        />
      </Grid>
    </>
  );
};

export default ItemCount;
