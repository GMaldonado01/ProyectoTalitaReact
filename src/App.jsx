import NavBar from "./Componentes/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer";
import { Catalogo } from "./Componentes/Catalogo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import ItemDetailConteiner from "./Componentes/ItemDetailConteiner";
import Categorias from "./Componentes/Categorias";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/catalogo" element={<Catalogo />} />
        <Route path="/itemDetail/:id" element={<ItemDetailConteiner />}></Route>
        <Route exact path="/categorias/:categoria" element={<Categorias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
