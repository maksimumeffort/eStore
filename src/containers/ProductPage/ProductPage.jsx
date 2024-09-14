import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProductById,
  incrementProduct,
  decrementProduct,
} from "../../services/products";
import {
  addProductToCart,
  checkIfInCart,
  incrementProductInCart,
} from "../../services/cart";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [inc, setInc] = useState(0);
  const [clicked, setClicked] = useState(0);

  useEffect(() => {
    const wrapper = async () => {
      const data = await getProductById(id);
      //   console.log(data);
      setProductInfo(data);
    };
    wrapper();
  }, [clicked, id, inc]);

  const handleDecrement = async () => {
    if (inc > 0) {
      await incrementProduct(productInfo.id);
      setInc(inc - 1);
    }
  };
  const handleIncrement = async () => {
    if (productInfo.quantity >= 1) {
      await decrementProduct(productInfo.id);
      setInc(inc + 1);
    }
  };

  const handleClick = async () => {
    try {
      // await updateProduct(id);
      //   console.log("updated");
      setClicked(clicked + 1);
      const isInCart = await checkIfInCart(id);
      // console.log(isInCart);
      // console.log(id);
      // console.log(productInfo);
      const isValid = inc >= 1;
      if (isInCart && isValid) {
        await incrementProductInCart(id, inc);
      } else if (isValid) {
        await addProductToCart(id, { ...productInfo, amountInCart: inc });
      } else {
        console.log("invalid quantity selected");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Card}>
        <img src={productInfo.image} className={styles.Img} />
        <h4>{productInfo.name}</h4>
        <p>AUD ${productInfo.price}</p>
        <p>Stock: {productInfo.quantity}</p>

        <p>
          <button onClick={handleDecrement}>-</button>
          {inc}
          <button onClick={handleIncrement}>+</button>
        </p>
        <button onClick={handleClick}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
