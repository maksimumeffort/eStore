import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../../services/products";
import {
  addProductToCart,
  checkIfInCart,
  incrementProductInCart,
} from "../../services/cart";

const ProductPage = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [inc, setInc] = useState(productInfo.amountInStore);

  useEffect(() => {
    const wrapper = async () => {
      const data = await getProductById(id);
      //   console.log(data);
      setProductInfo(data);
    };
    wrapper();
  }, [inc, id]);

  const handleClick = async () => {
    try {
      await updateProduct(id);
      //   console.log("updated");
      setInc(inc + 1);
      const isInCart = await checkIfInCart(id);

      if (isInCart) {
        await incrementProductInCart(id);
      } else {
        await addProductToCart({ ...productInfo, amountInCart: 1 });
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <h1>{productInfo.title}</h1>
      <p>{productInfo.price}</p>
      <p>{productInfo.amountInStore}</p>
      <button onClick={handleClick}>Purchase</button>
    </div>
  );
};

export default ProductPage;
