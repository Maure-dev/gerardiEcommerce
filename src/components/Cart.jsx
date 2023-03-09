import {
  Button,
  Container,
  SimpleGrid,
  Stack,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import SendOrder from "./SendOrder";

const Cart = () => {
  const { cartList, deleteItem, calcItemsMount } = useContext(CartContext);

  return (
    <>
      {cartList.length > 0 && (
        <>
          <Center h="100px">
            <Heading size="3xl" fontFamily="Calibri" color="#6b46c1">
              Carrito de Compras
            </Heading>
          </Center>
          <Container maxW="container.xl">
            <SimpleGrid
              spacing={2}
              templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
            >
              {cartList.map((item) => {
                return (
                  <div key={item.id}>
                    <Center p="1rem">
                      <Card variant="filled" bg="#dcd3f0" maxW="sm">
                        <CardHeader>
                          <Heading size="md">{item.title}</Heading>
                        </CardHeader>
                        <CardBody>
                          <Stack>
                            <Center>
                              <Image
                                borderRadius="lg"
                                boxSize="200px"
                                src={item.pictureUrl}
                              />
                            </Center>
                            <Text as="b" color="#6b46c1" fontSize="l">
                              {item.description}
                            </Text>
                            <Text as="b" color="#6b46c1" fontSize="l">
                              Cantidad: {item.quantity}
                            </Text>
                            <Text as="b" color="#6b46c1" fontSize="l">
                              Precio: USD$ {item.price}
                            </Text>
                          </Stack>
                        </CardBody>
                        <Center>
                          <CardFooter>
                            <Stack direction="column">
                              <Button
                                colorScheme="purple"
                                onClick={() => deleteItem(item.id)}
                              >
                                Eliminar del carrito
                              </Button>
                            </Stack>
                          </CardFooter>
                        </Center>
                      </Card>
                    </Center>
                  </div>
                );
              })}
            </SimpleGrid>
          </Container>
          <Container
            marginTop="10"
            maxW="150rem"
            backgroundColor="#dcd3f0"
            color="#6b46c1"
            borderRadius="10rem"
          >
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Box p="5">
                <Text as="b" color="#6b46c1" fontSize="2xl">
                  Total a pagar
                </Text>
              </Box>
              <Spacer />
              <Box p="5">
                <Text as="b" color="#6b46c1" fontSize="2xl">
                  USD$: {calcItemsMount()}
                </Text>
              </Box>
            </Flex>
          </Container>
          <SendOrder />
        </>
      )}

      {cartList.length === 0 && (
        <>
          <Stack direction="column">
            <Center>
              <Image
                marginTop="10"
                boxSize="400px"
                src="../../public/emptyCart.png"
              />
            </Center>
            <Heading
              size="xl"
              marginTop="10"
              fontFamily="Calibri"
              color="#6b46c1"
            >
              Tu carrito está vacío
            </Heading>
            <Text
              marginTop="10"
              as="b"
              color="#6b46c1"
              fontSize="2xl"
              fontFamily="Calibri"
            >
              ¿No sabés qué comprar? ¡Miles de productos te esperan!
            </Text>
            <Link to={"/"}>
              <Button
                marginTop="10"
                colorScheme="purple"
                size="lg"
                variant="outline"
              >
                Menú Principal
              </Button>
            </Link>
          </Stack>
        </>
      )}
    </>
  );
};

export default Cart;
