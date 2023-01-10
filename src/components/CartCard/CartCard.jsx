import { NavLink } from "react-router-dom";
import {
  deleteProductFromCart,
  incrementProductInCart,
  decrementProductInCart,
} from "../../services/cart";

// import {}
import styles from "./CartCard.module.scss";

const CartCard = ({ product, added, setAdded }) => {
  const handleDelete = async () => {
    await deleteProductFromCart(product.id);
    setAdded(added + 1);
  };
  const handleDecrementInCart = async () => {
    await decrementProductInCart(product.id);
    setAdded(added + 1);
  };
  const handleIncrementInCart = async () => {
    await incrementProductInCart(product.id);
    setAdded(added + 1);
  };

  return (
    <div className={styles.card}>
      <NavLink to={`/product/${product.id}`}>
        <h4>{product.name}</h4>
      </NavLink>
      <p>AUD ${product.pricePerUnit}</p>
      <p>Available Stock: {product.quantity}</p>
      <p>
        Quantity: <button onClick={decrementProductInCart}>-</button>
        {product.amountInCart}
        <button onClick={handleIncrementInCart}>+</button>
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default CartCard;
