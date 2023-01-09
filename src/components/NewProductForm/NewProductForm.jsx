import { useState } from "react";
import styles from "./NewProductForm.module.scss";
import { addProduct } from "../../services/products";
import { useNavigate } from "react-router-dom";

const NewProductForm = ({ added, setAdded }) => {
  const navigate = useNavigate();

  const initialState = {
    title: "",
    price: "",
    stock: "",
  };
  const [newProduct, setNewProduct] = useState(initialState);

  const convertType = (name, value) => {
    return name === "price" || name === "stock" ? Number(value) : value;
  };
  const handleChange = (event) => {
    //   event target is an input: has value and name property
    const { name, value } = event.target;
    console.log(name, value);
    setNewProduct({ ...newProduct, [name]: convertType(name, value) });
  };

  console.log(newProduct);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(newProduct);
    await addProduct(newProduct);
    setAdded(added + 1);
    console.log("added");
    // navigate("/");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" name="title" onChange={handleChange} />
      <label htmlFor="price">Price</label>
      <input
        id="price"
        type="number"
        name="price"
        step=".01"
        onChange={handleChange}
      />
      <label htmlFor="amountInStore">Stock</label>
      <input
        id="amountInStore"
        type="number"
        name="amountInStore"
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
};

export default NewProductForm;
