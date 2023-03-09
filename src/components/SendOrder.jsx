import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Text,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { CartContext } from "../context/CartContext";

function SendOrder() {
  const { cartList, calcItemsMount } = useContext(CartContext);

  const [order, setOrder] = useState({
    buyer: {
      name: "",
      email: "",
      phone: "",
    },
    total: parseFloat(calcItemsMount()),
    items: cartList,
    date: serverTimestamp(),
  });

  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();

  const ordersCollection = collection(db, "Ordenes");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      buyer: {
        ...order.buyer,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  return (
    <>
      <Container
        marginTop="10"
        paddingBottom="10"
        maxW="80rem"
        backgroundColor="#dcd3f0"
        color="#6b46c1"
        borderRadius="120"
      >
        <Box>
          <form onSubmit={handleSubmit}>
            <Stack spacing="10" marginLeft="70" marginRight="70">
              <FormControl marginTop="10" id="name" isRequired>
                <FormLabel>Nombre Completo</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={order.buyer.name}
                  onChange={handleChange}
                  size="lg"
                  bg="#fffafa"
                />
              </FormControl>

              <FormControl id="phone" isRequired>
                <FormLabel>Teléfono</FormLabel>
                <Input
                  type="tel"
                  name="phone"
                  value={order.buyer.phone}
                  onChange={handleChange}
                  size="lg"
                  bg="#fffafa"
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Correo Electrónico</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={order.buyer.email}
                  onChange={handleChange}
                  size="lg"
                  bg="#fffafa"
                />
              </FormControl>
            </Stack>
            <Button
              marginTop="10"
              marginBottom="10"
              colorScheme="purple"
              size="lg"
              variant="solid"
              type="submit"
            >
              Realizar la compra
            </Button>
          </form>
        </Box>
        <Text marginBottom="10" as="b" color="#6b46c1" fontSize="2xl">
          Orden de la compra: {orderId}
        </Text>
      </Container>
    </>
  );
}

export default SendOrder;
