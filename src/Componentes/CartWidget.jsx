import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";

import "../App.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cartWidget">
      <FontAwesomeIcon icon={faCartShopping} />
      <h6>{cart.length}</h6>
    </div>
  );
};

export default CartWidget;
