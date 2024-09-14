import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  deleteProductFromCart,
  incrementProductInCart,
  decrementProductInCart,
  getAllProductsInCart,
} from "../../services/cart";
import { incrementProduct, decrementProduct } from "../../services/products";

// import {}
import styles from "./CartCard.module.scss";

const CartCard = ({ product, added, setAdded }) => {
  const [inc, setInc] = useState(product.amountInCart);
  console.log(inc);
  const [cartInfo, setCartInfo] = useState({});

  // useEffect(() => {
  //   const wrapper = async () => {
  //     const data = await getAllProductsInCart();
  //     //   console.log(data);
  //     setCartInfo(data);
  //   };
  //   wrapper();
  // }, [inc]);

  const handleDelete = async () => {
    await deleteProductFromCart(product.id);
    setAdded(added + 1);
  };
  const handleDecrementInCart = async () => {
    if (inc >= 1) {
      await decrementProductInCart(product.id);
      await incrementProduct(product.id);
      setInc(inc - 1);
      console.log(`new quantity: ${product.quantity}`);
    }
  };
  const handleIncrementInCart = async () => {
    await incrementProductInCart(product.id);
    await decrementProduct(product.id);
    setInc(inc + 1);
    console.log(`new quantity: ${product.quantity}`);
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
