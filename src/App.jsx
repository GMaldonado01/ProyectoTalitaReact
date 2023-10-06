import NavBar from "./Componentes/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailConteiner from "./Componentes/ItemDetailConteiner";
import { CartProvider } from "./context/cartContext";
import Home from "./Componentes/Home";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/catalogo" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailConteiner />} />
          <Route
            exact
            path="/categorias/:categoria"
            element={<ItemListContainer />}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
