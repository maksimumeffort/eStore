import { NavLink } from "react-router-dom";
import { toggleFavourite } from "../../services/products";
import styles from "./ProductCard.module.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";

// TODO 2: Font awesome not able to export bo the regular and solid as has same name. find if can export as another name
const ProductCard = ({ product, added, setAdded }) => {
  const handleFavourite = async () => {
    await toggleFavourite(product.id, !product.inFavourites);
    setAdded(added + 1);
  };
  // console.log(product);

  return (
    <div className={styles.card}>
      <img src={product.image} className={styles.img} />
      <NavLink to={`/product/${product.id}`}>
        <h4>{product.name}</h4>
      </NavLink>
      <p>AUD ${product.price}</p>
      <p>Available: {product.quantity}</p>
      <p>Favourited: {product.inFavourites ? "yes" : "no"}</p>

      <button onClick={handleFavourite}>
        Heart
        {/* <FontAwesomeIcon icon={faHeart} /> */}
      </button>
    </div>
  );
};

export default ProductCard;
