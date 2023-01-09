import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductList.module.scss";

const ProductList = ({ products, added, setAdded }) => {
  return (
    <>
      <div className={styles.list}>
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                added={added}
                setAdded={setAdded}
              />
            );
          })}
      </div>
    </>
  );
};

export default ProductList;
