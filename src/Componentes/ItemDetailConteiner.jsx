import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { alfajores } from "./CatalogoMock";
import { ItemDetail } from "./ItemDetail";

const ItemDetailConteiner = () => {
  const [item, setItem] = useState(null);
  const params = useParams();

  const pedirItemPorId = (id) => {
    console.log("id: ", id);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          alfajores.find((alfajor) => {
            console.log("alfajor.id: ", alfajor.id);
            return alfajor.id.toString() === id;
          })
        );
      }, 2000);
    });
  };

  useEffect(() => {
    pedirItemPorId(params.id).then((res) => {
      setItem(res);
    }, []);
  }, [params.id]);

  return (
    <div>
      {item ? (
        <ItemDetail
          nombre={item.nombre}
          descripcion={item.descripcion}
          imagen={item.imagen}
        />
      ) : (
        "Cargando..."
      )}
    </div>
  );
};

export default ItemDetailConteiner;
