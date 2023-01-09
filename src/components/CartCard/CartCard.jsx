import { NavLink } from "react-router-dom";
import { deleteProduct } from "../../services/products";
// import {}
import styles from "./CartCard.module.scss";

const CartCard = ({ product, added, setAdded }) => {
  const handleDelete = async () => {
    await deleteProduct(product.id);
    setAdded(added + 1);
  };

  return (
    <div className={styles.card}>
      <NavLink to={`/product/${product.id}`}>
        <h2>{product.title}</h2>
      </NavLink>
      <p>{product.price}</p>
      <p>{product.amountInCart}</p>
      <p>{product.amountInStore}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default CartCard;
