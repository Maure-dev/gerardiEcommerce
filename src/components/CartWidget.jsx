import { FaShoppingCart } from "react-icons/fa";
import { Icon, Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { calcItemsQty } = useContext(CartContext);

  return (
    <>
      <div>
        <Link to={"/cart"}>
          <Button size="lg" variant="outline" colorScheme="purple">
            <Icon marginRight="2" as={FaShoppingCart} />
            <Text>{calcItemsQty()}</Text>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
