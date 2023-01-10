import { NavLink } from "react-router-dom";
import { deleteProductFromCart } from "../../services/cart";
// import {}
import styles from "./CartCard.module.scss";

const CartCard = ({ product, added, setAdded }) => {
  const handleDelete = async () => {
    await deleteProductFromCart(product.id);
    setAdded(added + 1);
  };

  return (
    <div className={styles.card}>
      <NavLink to={`/product/${product.id}`}>
        <h2>{product.title}</h2>
      </NavLink>
      <p>AUD ${product.price}</p>
      <p>Available Stock: {product.amountInStore}</p>
      <p>
        Quantity: <button>-</button>
        {product.amountInCart}
        <button>+</button>
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default CartCard;
