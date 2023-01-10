// create all the CRUD functions needed

import { db } from "../firestore";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

// Read

export const getAllProducts = async () => {
  const collectionRef = collection(db, "products");
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

export const addProduct = async (data) => {
  const { name, price, quantity, image } = data;
  const product = { name, price, quantity, image };
  const collectionRef = collection(db, "products");
  const newDoc = await addDoc(collectionRef, product);
  console.log(newDoc);
  return newDoc;
};

// Delete

export const deleteProduct = async (id) => {
  const docRef = doc(db, "products", id);
  await deleteDoc(docRef);
  console.log("deleted");
};

// Read

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  //   console.log(docSnap);

  if (!docSnap.exists()) {
    throw new Error("Doc was not found");
  }
  return { id: docSnap.id, ...docSnap.data() };
};

// Update

export const incrementProduct = async (id) => {
  const docRef = doc(db, "products", id);
  await updateDoc(docRef, {
    quantity: increment(1),
  });
};

export const decrementProduct = async (id) => {
  const docRef = doc(db, "products", id);
  await updateDoc(docRef, {
    quantity: increment(-1),
  });
};

// export const updateProduct = async (id) => {
//   const docRef = doc(db, "products", id);
//   await updateDoc(docRef, {
//     quantity: increment(-1),
//   });
// };

export const toggleFavourite = async (id, newValue) => {
  const docRef = doc(db, "products", id);
  await updateDoc(docRef, {
    inFavourites: newValue,
  });
};
