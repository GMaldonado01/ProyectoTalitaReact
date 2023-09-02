import { alfajores } from "./CatalogoMock";
import { Item } from "./Item";

export const Catalogo = () => {
  return (
    <div>
      {alfajores.map((alfajor) => (
        <Item nombre={alfajor.nombre} imagen={alfajor.imagen} />
      ))}
    </div>
  );
};
