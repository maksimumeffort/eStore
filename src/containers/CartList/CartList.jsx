import CartCard from "../../components/CartCard/CartCard";
import { getAllProductsInCart } from "../../services/cart";
import styles from "./CartList.module.scss";
import { useState, useEffect } from "react";

const CartList = ({ added, setAdded }) => {
  {
    added, setAdded;
  }
  const [productsInCart, setProductsInCart] = useState([]);
  const [addedProductsInCart, setAddedProductsInCart] = useState(0);

  useEffect(() => {
    const wrapper = async () => {
      const allProductsInCart = await getAllProductsInCart();

      setProductsInCart(allProductsInCart);
    };

    wrapper();
  }, [addedProductsInCart]);

  return (
    <>
      <div className={styles.CartList}>
        {productsInCart &&
          productsInCart.map((product) => {
            return (
              <CartCard
                key={product.id}
                product={product}
                added={addedProductsInCart}
                setAdded={setAddedProductsInCart}
              />
            );
          })}
      </div>
      <div>
        {productsInCart.reduce((total, product) => {
          return total + product.price;
        }, 0)}
      </div>
    </>
  );
};

export default CartList;
