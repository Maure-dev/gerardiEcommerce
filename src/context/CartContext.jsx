import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      setCartList((prevCartList) =>
        prevCartList.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
        )
      );
    } else {
      const newItem = { ...item, quantity };
      setCartList((prevCartList) => [...prevCartList, newItem]);
    }
  };

  const removeList = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    setCartList((prevCartList) =>
      prevCartList.filter((item) => item.id !== id)
    );
  };

  const isInCart = (id) => {
    return cartList.some((item) => item.id === id);
  };

  const calcItemsMount = () => {
    const total = cartList
      .reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0)
      .toFixed(2);
    return total;
  };

  const calcItemsQty = () => {
    const total = cartList.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
        addToCart,
        removeList,
        deleteItem,
        isInCart,
        calcItemsMount,
        calcItemsQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
