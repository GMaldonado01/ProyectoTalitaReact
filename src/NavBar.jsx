import CartWidget from "./CartWidget";

import "./App.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navBar">
        <div className="logoTalita"></div>
        <ul className="navBarItems">
          <li>Nosotros</li>
          <li>Productos</li>
          <li>Eventos</li>
          <li>Contactanos</li>
          <CartWidget />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
