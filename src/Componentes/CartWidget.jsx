import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "../App.css";

const CartWidget = () => {
  return (
    <div className="cartWidget">
      <FontAwesomeIcon icon={faCartShopping} />
      <h6>0</h6>
    </div>
  );
};

export default CartWidget;
