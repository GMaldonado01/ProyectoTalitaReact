import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import { ItemDetail } from "./ItemDetail";

const carrito = () => {
  const [carrito] = useContext(CartContext);
  return (
    <div>
      {cart.map((producto) => (
        <h2>{(producto, nombre)}</h2>
      ))}
    </div>
  );
};
