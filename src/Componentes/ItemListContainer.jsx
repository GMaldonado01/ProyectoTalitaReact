import { useEffect, useState } from "react";
import "../App.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { alfajores } from "./CatalogoMock";

const ItemListContainer = () => {
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
      }, 1000);
    });
  };

  useEffect(() => {
    if (!params.categoria) {
      setItems(alfajores);
      return;
    }

    pedirItemsPorCategoria(params.categoria).then((res) => {
      setItems(res);
    }, []);
  }, [params.categoria]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
