// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrIZQTtlAtSBPCD6v4fqKQdxQmpmo3m24",
  authDomain: "estore-db-81ea9.firebaseapp.com",
  projectId: "estore-db-81ea9",
  storageBucket: "estore-db-81ea9.appspot.com",
  messagingSenderId: "970169435984",
  appId: "1:970169435984:web:4dce1fbf955ae55e3b8e55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize FireStore
export const db = getFirestore(app);
