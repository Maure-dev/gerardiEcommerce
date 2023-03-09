import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const notebooks = collection(db, "Notebooks");
    getDocs(notebooks).then((items) => {
      const notebooks = items.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));
      setItem(notebooks);
    });
  }, []);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
