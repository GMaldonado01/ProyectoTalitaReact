import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  function isInCart(id) {
    return cart.some((producto) => {
      if (producto.id === id) {
        return true;
      }
      return false;
    });
  }

  function addItem(item, cant) {
    setCart([...cart, { item, cant }]);
    if (isInCart(item.id)) {
      const updatedCart = cart.map((producto) => {
        if (producto.item.id === item.id) {
          return { item: producto.item, cant: producto.cant + cant };
        }
        return producto;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { item, cant }]);
    }
  }

  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
