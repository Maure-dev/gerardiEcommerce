import { FaShoppingCart } from "react-icons/fa";
import { Icon, Button, Text } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <>
      <div
        className="cart"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button size="lg" variant="outline" colorScheme="purple">
          <Icon marginRight="2" as={FaShoppingCart} />
          <Text>0</Text>
        </Button>
      </div>
    </>
  );
};

export default CartWidget;
