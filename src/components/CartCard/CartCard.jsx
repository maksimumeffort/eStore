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
    <div className={styles.Card}>
      <img src={product.image} className={styles.Card_Img} />
      <div>
        <NavLink
          to={`/product/${product.id}`}
          className={styles.Card_ElementLink}
        >
          <h5>{product.name.substring(0, 50)}...</h5>
        </NavLink>
        <div className={styles.Card_Flex}>
          <p className={styles.Card_Element}>
            Available Stock: {product.quantity}
          </p>
          <p className={styles.Card_Element}>
            Quantity: <button onClick={handleDecrementInCart}>-</button>
            {product.amountInCart}
            <button onClick={handleIncrementInCart}>+</button>
          </p>
        </div>
      </div>

      <div>
        <p>AUD ${product.price}</p>
      </div>

      <button className={styles.Card_Element_Delete} onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

export default CartCard;
