import { useContext, useState } from "react";
import "../App.css";
import { CartContext } from "../context/cartContext";

export default function ItemCount({ producto }) {
  const [count, setCount] = useState(1);
  const { addItem } = useContext(CartContext);

  return (
    <div className="contenedorBotones">
      <button
        className="boton"
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      <span className="contador">{count}</span>
      <button className="boton" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button
        className="boton"
        onClick={() => {
          addItem(producto, count);
        }}
      >
        Agregar al carrito
      </button>
      <button className="boton" onClick={() => {}}>
        Finalizar compra
      </button>
    </div>
  );
}
