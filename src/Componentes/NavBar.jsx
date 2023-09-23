import CartWidget from "./CartWidget";
import "../App.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navBar">
        <Link to="/" className="logoTalita"></Link>
        <ul className="navBarItems">
          <li>
            <Link to="/Catalogo"> Catalogo de alfajores </Link>
          </li>
          <li>
            <Link to="/categorias/Conbanodechocolate">
              {" "}
              Con baño de chocolate{" "}
            </Link>
          </li>
          <li>
            <Link to="/categorias/Sinbanodechocolate">
              {" "}
              Sin baño de chocolate{" "}
            </Link>
          </li>

          <CartWidget />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
