import {
  Card,
  CardBody,
  Center,
  Heading,
  Stack,
  Text,
  Image,
  CardHeader,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <>
      <div key={item.id}>
        <Center p="1rem">
          <Card variant="filled" bg="#dcd3f0" maxW="sm">
            <CardHeader>
              <Heading size="sm">{item.title}</Heading>
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
                  Precio: USD$ {item.price}
                </Text>
              </Stack>
            </CardBody>
            <Center>
              <CardFooter>
                <Link to={`/item/${item.id}`}>
                  <Button variant="solid" colorScheme="purple">
                    <Text>Ver Detalles</Text>
                  </Button>
                </Link>
              </CardFooter>
            </Center>
          </Card>
        </Center>
      </div>
    </>
  );
};

export default Item;
