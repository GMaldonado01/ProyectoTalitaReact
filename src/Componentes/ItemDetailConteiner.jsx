import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { alfajores } from "./CatalogoMock";
import { ItemDetail } from "./ItemDetail";

const ItemDetailConteiner = () => {
  const [item, setItem] = useState(null);
  const params = useParams();

  const pedirItemPorId = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          alfajores.find((alfajor) => {
            return alfajor.id.toString() === id;
          })
        );
      }, 1000);
    });
  };

  useEffect(() => {
    pedirItemPorId(params.id).then((res) => {
      setItem(res);
    }, []);
  }, [params.id]);

  return <div>{item ? <ItemDetail producto={item} /> : "Cargando..."}</div>;
};

export default ItemDetailConteiner;
