import NavBar from "./Componentes/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer";
import { Catalogo } from "./Componentes/Catalogo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailConteiner from "./Componentes/ItemDetailConteiner";
import ItemList from "./Componentes/ItemList";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <h1>Bienvienidos</h1>
            </div>
          }
        />
        <Route exact path="/catalogo" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailConteiner />}></Route>
        <Route
          exact
          path="/categorias/:categoria"
          element={<ItemListContainer />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
