import { Heading, Center } from "@chakra-ui/react";
import ItemList from "./ItemList";
import Products from "../Products.json";
import { useState, useEffect } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const getItems = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Products.length === 0) {
          reject(new Error("No hay Items para visualizar"));
        }
        resolve(Products);
      }, 2000);
    });
  };

  const [items, setItem] = useState([]);

  useEffect(() => {
    getItems().then((items) => setItem(items));
  }, []);

  const categoryFilter = items.filter((item) => item.category === category);

  return (
    <>
      <Center h="100px">
        <Heading size="3xl" fontFamily="Calibri" color="#6b46c1">
          {greeting}
        </Heading>
      </Center>
      {category ? (
        <ItemList items={categoryFilter} />
      ) : (
        <ItemList items={items} />
      )}
      <ItemDetailContainer />
    </>
  );
};

export default ItemListContainer;
