import React, { createContext, useState, useEffect } from "react";

const cartContext = createContext({
  cartItems: [],
  addCartItem() {},
  removeCartItem() {},
  totalAmount: 0,
  emptyCart() {},
});

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => calculateTotal(), [cartItem]);

  const emptyCart = () => {
    setCartItem([]);
  };
  const calculateTotal = () => {
    const cartTotalArr = [];
    for (const item of cartItem) {
      cartTotalArr.push(Number(item.price));
    }
    const total = cartTotalArr.reduce((a, b) => a + b, 0);
    setTotalAmount(total);
  };
  const addCartItem = (item) => {
    setCartItem((prevState) => [...prevState, item]);
  };
  const removeCartItem = (item) => {
    setCartItem((prevState) => prevState.filter((i) => item.name !== i.name));
  };
  const cartContextValue = {
    addCartItem: addCartItem,
    cartItems: cartItem,
    totalAmount: totalAmount,
    removeCartItem: removeCartItem,
    emptyCart: emptyCart,
  };
  return (
    <cartContext.Provider value={cartContextValue}>
      {children}
    </cartContext.Provider>
  );
};
export default cartContext;
