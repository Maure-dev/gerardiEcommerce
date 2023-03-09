import { Heading, Center, Image, Spinner } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const notebooks = collection(db, "Notebooks");
    getDocs(notebooks).then((items) => {
      const notebooks = items.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));
      setItem(notebooks);
      setIsLoading(false);
    });
  }, []);

  const categoryFilter = items.filter((item) => item.category === category);
  const categoryName = category ? category : "";

  return (
    <>
      <Center h="100px">
        <Heading size="3xl" fontFamily="Calibri" color="#6b46c1">
          {greeting + categoryName}
        </Heading>
      </Center>
      {isLoading ? (
        <Center marginTop="10">
          <Spinner
            thickness="4px"
            speed="1s"
            emptyColor="gray.200"
            color="#6b46c1"
            size="xl"
          />
        </Center>
      ) : category ? (
        categoryFilter.length > 0 ? (
          <ItemList items={categoryFilter} />
        ) : (
          <>
            <Center>
              <Image
                marginTop="10"
                boxSize="400px"
                borderRadius="10"
                src="../../public/outOfStock.jpg"
              />
            </Center>
            <Heading
              size="xl"
              marginTop="10"
              fontFamily="Calibri"
              color="#6b46c1"
            >
              No hay productos en la categoría seleccionada
            </Heading>
          </>
        )
      ) : items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <>
          <Center>
            <Image
              marginTop="10"
              boxSize="400px"
              borderRadius="10"
              src="../../public/outOfStock.jpg"
            />
          </Center>
          <Heading
            size="xl"
            marginTop="10"
            fontFamily="Calibri"
            color="#6b46c1"
          >
            No hay productos
          </Heading>
        </>
      )}
      <ItemDetailContainer />
    </>
  );
};

export default ItemListContainer;
