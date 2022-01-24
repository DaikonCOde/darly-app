import {
  collection,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { DBfirestore } from "../db/connect";

export const createProduct = async (data) => {

  const slug = data.title.toLowerCase().replaceAll(' ', '-');

  const refProducts = doc(DBfirestore, `products/${slug}`);
  try {
    await setDoc(refProducts, data)
    return true
  } catch (error) {
    return false
  }
}