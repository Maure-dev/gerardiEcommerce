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
  Flex,
  Spacer,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { Link, useParams } from "react-router-dom";
import React from "react";

const ItemDetail = ({ item }) => {
  const { id } = useParams();
  const itemFiltered = item.filter((item) => item.id == id);

  return (
    <>
      {itemFiltered.map((item) => (
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
                    Precio: USD$ {item.price}
                  </Text>
                  <Text as="b" color="#6b46c1" fontSize="l">
                    Stock: {item.stock}
                  </Text>
                  <Text as="b" color="#6b46c1" fontSize="l">
                    {item.description}
                  </Text>
                </Stack>
              </CardBody>
              <Center>
                <CardFooter>
                  <Stack direction="column">
                    <ItemCount stock={item.stock} />
                    <Link to={-1}>
                      <Button variant="outline" colorScheme="purple">
                        <Text>Volver</Text>
                      </Button>
                    </Link>
                  </Stack>
                </CardFooter>
              </Center>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
