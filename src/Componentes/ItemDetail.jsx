import "../App.css";
import ItemCount from "./ItemCount";

export const ItemDetail = ({ producto }) => {
  const { nombre, descripcion, imagen } = producto;

  return (
    <div className="contenedorTarjetitas">
      <div className="tarjetita">
        <img src={imagen} alt="" className="imagenesCarrito" />
        <h2 className="titulo">{nombre}</h2>
        <h4 className="descripcion">{descripcion}</h4>
      </div>
      <ItemCount producto={producto} />
    </div>
  );
};
