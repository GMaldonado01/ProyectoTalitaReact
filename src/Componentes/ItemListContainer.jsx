import { useEffect, useState } from "react";
import "../App.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { alfajores } from "./CatalogoMock";

// import {
//   collection,
//   doc,
//   getDocs,
//   getFirestore,
//   snapshotEqual,
// } from "firebase/firestore";

// function App() {
//   const [products, setProducts] = useState[];
//   useEffect(() => {
//     // 58JjCWbtjGlxMk28P0uJ
//     const db = getFirestore();

//     const productsRef = collection(db, "Talita")

//     getDocs(productsRef).then((snapshot) =>{
//       if(snapshot.size !== 0 {
//         setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data(   )})))
//       })
//     })

//   }, []);

//   return(
//     <section>
//       <h1>Firebase</h1>
//       {products.map(product => (
//         <div key={product.id}>
//           <h2> {product.nombre} </h2>
//           <h3> {product.descripcion} </h3>
//           <h3> {product.precio} </h3>
//         </div>)
//       )}
//     </section>
//   )
// }

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const params = useParams();

  const pedirItemsPorCategoria = (categoria) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          alfajores.filter((alfajor) => {
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
