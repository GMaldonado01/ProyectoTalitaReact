import { alfajores } from "./CatalogoMock";
import { Item } from "./Item";
import "../App.css";

export const Catalogo = () => {
  return (
    <div className="todo">
      <div>
        {alfajores.map((alfajor) => (
          <Item
            key={alfajor.id}
            nombre={alfajor.nombre}
            imagen={alfajor.imagen}
            id={alfajor.id}
          />
        ))}
      </div>
    </div>
  );
};
