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
import ItemCount from "./ItemCount";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ item }) => {
  const { id } = useParams();

  const [itemBuy, setItemBuy] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const notebookId = doc(db, "Notebooks", `${id}`);
    getDoc(notebookId).then((item) => {
      if (item.exists()) {
        setItemBuy(item.data());
      }
    });
  }, []);

  const itemFiltered = item.filter((itemFilter) => itemFilter.id == id);

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
                    <ItemCount items={item} />
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
