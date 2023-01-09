import { NavLink } from "react-router-dom";
import { deleteProduct } from "../../services/products";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product, added, setAdded }) => {
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
      <p>{product.amountInStore}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductCard;
