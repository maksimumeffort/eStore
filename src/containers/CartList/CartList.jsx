import CartCard from "../../components/CartCard/CartCard";
import { getAllProductsInCart } from "../../services/cart";
import styles from "./CartList.module.scss";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

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
    <div className={styles.CartList}>
      <div className={styles.Total}>
        <div className={styles.Total_Flex}>
          <h3 className={styles.Total_Text}>Total:</h3>
          <h3 className={styles.Total_Text}>
            AUD $
            {productsInCart &&
              productsInCart.reduce((total, product) => {
                return total + product.price;
              }, 0)}
          </h3>
        </div>

        <button>Checkout</button>
      </div>
      <div>
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
    </div>
  );
};

export default CartList;
