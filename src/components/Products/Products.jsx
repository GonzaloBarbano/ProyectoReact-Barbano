import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig"; 

export const getAllProducts = () => {
  const collectionReference = collection(db, "items");

  return getDocs(collectionReference)
    .then((snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return list;
    })
    .catch((error) => console.warn(error));
};

export const getProduct = (id) => {
  const itemReference = doc(db, "items", id);

  return getDoc(itemReference)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data(),
        };
        return item;
      }
    })
    .catch((error) => console.warn(error));
};

export const getProductsByCategory = (categoryId) => {
  const collectionReference = collection(db, "items");
  const collectionQuery = query(collectionReference, where("category", "==", categoryId));

  return getDocs(collectionQuery)
    .then((snapshot) => {
      if (snapshot.size === 0) return [];

      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return list;
    })
    .catch((error) => console.warn(error));
};

const products = [];

export const createAllProdcuts = async () => {
  try {
    const collectionReference = collection(db, "items");
    for (let i = 0; i < products.length; i++) {
      const snapshot = await addDoc(collectionReference, products[i]);
    }
  } catch (error) {
    console.warn(error);
  }
};