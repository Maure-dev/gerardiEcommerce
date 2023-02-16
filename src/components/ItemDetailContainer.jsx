import React from "react";
import { useState, useEffect } from "react";
import Products from "../Products.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const getItem = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Products.length === 0) {
          reject(new Error("No hay Items para visualizar"));
        }
        const itemFiltered = Products.filter((item) => item.id == id);
        resolve(itemFiltered);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem().then((item) => setItem(item));
  }, []);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
