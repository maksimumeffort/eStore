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
      console.log(isInCart);
      console.log(id);
      console.log(productInfo);
      if (isInCart) {
        await incrementProductInCart(id, inc);
      } else {
        await addProductToCart(id, { ...productInfo, amountInCart: inc });
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <img src={productInfo.image} className={styles.img} />
      <h4>{productInfo.name}</h4>
      <p>AUD ${productInfo.pricePerUnit}</p>
      <p>Stock: {productInfo.quantity}</p>

      <p>
        <button onClick={handleDecrement}>-</button>
        {inc}
        <button onClick={handleIncrement}>+</button>
      </p>

      <button onClick={handleClick}>Purchase</button>
    </div>
  );
};

export default ProductPage;
