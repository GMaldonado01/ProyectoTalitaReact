import { Link } from "react-router-dom";

export const Item = ({ nombre, imagen, id }) => {
  return (
    <div>
      <img src={imagen} alt="" />
      <h2>{nombre}</h2>
      <Link to={"/itemDetail/" + id}>ver mas</Link>
    </div>
  );
};
