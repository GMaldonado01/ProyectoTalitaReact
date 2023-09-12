export const ItemDetail = ({ nombre, imagen, descripcion }) => {
  return (
    <div>
      <img src={imagen} alt="" />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
    </div>
  );
};
