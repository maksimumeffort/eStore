import { useState, useEffect } from "react";
import styles from "./App.module.scss";
import TaskCard from "../components/TaskCard/TaskCard";
import { getAllProducts } from "./services/products";
import { getAllProductsInCart } from "./services/cart";
import ProductList from "./containers/ProductList/ProductList";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewProductForm from "./components/NewProductForm/NewProductForm";
import ProductPage from "./containers/ProductPage/ProductPage";
import CartList from "./containers/CartList/CartList";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const App = () => {
  const [productsInStore, setProductsInStore] = useState([]);
  const [addedProducts, setAddedProducts] = useState(0);

  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    const wrapper = async () => {
      const allProductsInStore = await getAllProducts();

      setProductsInStore(allProductsInStore);
    };

    wrapper();
  }, [addedProducts]);
  // call get data function when page loads
  // useEffect with an empty watch list
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>eStore</h2>
                <ProductList
                  products={productsInStore}
                  added={addedProducts}
                  setAdded={setAddedProducts}
                />
              </div>
            }
          />
          <Route
            path="/new-product"
            element={
              <div>
                <h1>New Product</h1>
                <NewProductForm
                  added={addedProducts}
                  setAdded={setAddedProducts}
                />
              </div>
            }
          />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route
            path="/cart"
            element={
              <div>
                <h2>Cart</h2>
                <CartList
                  products={productsInCart}
                  added={addedProducts}
                  setAdded={setAddedProducts}
                />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
