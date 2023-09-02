import NavBar from "./Componentes/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer";
import { Catalogo } from "./Componentes/Catalogo";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a TalitaKumm"} />
      <Catalogo />
    </>
  );
};

export default App;
