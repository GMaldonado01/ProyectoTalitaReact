import { Link } from "react-router-dom";
import "../App.css";

export const Item = ({ nombre, imagen, id }) => {
  return (
    <div className="imagenesProductos">
      <div className="tarjetita">
        <img src={imagen} alt="" className="imagenes" />
        <h2>{nombre}</h2>
        <Link to={"/itemDetail/" + id}>ver mas</Link>
      </div>
    </div>
  );
};
