import "../App.css";
export const ItemDetail = ({ nombre, imagen, descripcion }) => {
  return (
    <div>
      <div className="tarjetita">
        <img src={imagen} alt="" className="imagenes" />
        <h2 className="titulo">{nombre}</h2>
        <h4 className="descripcion">{descripcion}</h4>
      </div>
    </div>
  );
};
