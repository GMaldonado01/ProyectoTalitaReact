import { Item } from "./Item";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((alfajor) => (
        <Item
          key={alfajor.id}
          nombre={alfajor.nombre}
          imagen={alfajor.imagen}
          id={alfajor.id}
        />
      ))}
    </div>
  );
};

export default ItemList;
