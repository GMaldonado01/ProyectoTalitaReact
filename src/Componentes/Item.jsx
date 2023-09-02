export const Item = ({ nombre, imagen }) => {
  return (
    <div>
      <img src={imagen} alt="" />
      <h2>{nombre}</h2>
    </div>
  );
};
