import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/new-product">Add Product</NavLink>
      <NavLink to="cart">Cart</NavLink>
    </nav>
  );
};

export default Nav;
