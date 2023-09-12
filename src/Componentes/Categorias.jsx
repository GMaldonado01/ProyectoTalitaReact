import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { alfajores } from "./CatalogoMock";
import { Item } from "./Item";

const Categorias = () => {
  const [items, setItems] = useState([]);
  const params = useParams();

  const pedirItemsPorCategoria = (categoria) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          alfajores.filter((alfajor) => {
            console.log("categoria: ", categoria);
            return alfajor.categoria === categoria;
          })
        );
      }, 2000);
    });
  };

  useEffect(() => {
    pedirItemsPorCategoria(params.categoria).then((res) => {
      setItems(res);
    }, []);
  }, [params.categoria]);

  return (
    <div>
      {items.length
        ? items.map((alfajor) => (
            <Item
              key={alfajor.id}
              nombre={alfajor.nombre}
              imagen={alfajor.imagen}
              id={alfajor.id}
            />
          ))
        : "Cargando..."}
    </div>
  );
};

export default Categorias;
