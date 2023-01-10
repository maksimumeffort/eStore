// create all the CRUD functions needed

import { db } from "../firestore";

import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

// Read

export const getAllProductsInCart = async () => {
  const collectionRef = collection(db, "cart");
  const querySnapshot = await getDocs(collectionRef);

  console.log(querySnapshot.docs);
  // function should return array of products
  const data = querySnapshot.docs.map((doc) => {
    // console.log(`${doc.id} => ${doc.data().title}`);
    const id = doc.id;
    const restOfData = doc.data();
    return { id, ...restOfData };
  });

  return data;
};

// Create

export const addProductToCart = async (data) => {
  const { title, price, amountInStore, amountInCart, id } = data;
  const product = { title, price, amountInStore, amountInCart, id };

  const newDoc = await setDoc(doc(db, "cart", id), product);
  console.log(newDoc);
  return newDoc;
};

// Delete

export const deleteProductFromCart = async (id) => {
  const docRef = doc(db, "cart", id);
  await deleteDoc(docRef);
  console.log("deleted");
};

// Read

export const getProductById = async (id) => {
  const docRef = doc(db, "cart", id);
  const docSnap = await getDoc(docRef);

  //   console.log(docSnap);

  if (!docSnap.exists()) {
    throw new Error("Doc was not found");
  }
  return { id: docSnap.id, ...docSnap.data() };
};

// Update

export const incrementProductInCart = async (id) => {
  const docRef = doc(db, "cart", id);
  await updateDoc(docRef, {
    amountInCart: increment(1),
  });
};

export const decrementProductAmount = async (id) => {
  const docRef = doc(db, "cart", id);
  await updateDoc(docRef, {
    amountInStore: increment(-1),
  });
};

// check if exists

export const checkIfInCart = async (id) => {
  const docRef = doc(db, "cart", id);
  const docSnap = await getDoc(docRef);

  return docSnap.exists();
};
