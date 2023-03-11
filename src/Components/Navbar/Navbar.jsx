import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  let numero = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" >
         <img src="ElectroMarkets.jpg" alt="Logo del Local" style= {{ width: "66%", objectFit: "" }} />
        </Link>

        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>
            Inicio
          </Link>
          <Link to="/category/Heladeras" className={styles.navbarItem}>
            Heladeras
          </Link>
          <Link to="/category/Cocinas" className={styles.navbarItem}>
            Cocinas
          </Link>
          <Link to="/category/Lavarropas" className={styles.navbarItem}>
            Lavarropas
          </Link>
        </ul> 
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
