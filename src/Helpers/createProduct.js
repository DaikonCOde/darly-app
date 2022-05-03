import {
  // collection,
  // getDocs,
  setDoc,
  // updateDoc,
  // deleteDoc,
  doc,
} from "firebase/firestore";

import { DBfirestore } from "../db/connect";

export const createProduct = async (data) => {

  const slug = data.title.toLowerCase().replace(/['"/ ]+/g, '-');
  console.log(slug);
  try {
    await setDoc(doc(DBfirestore, 'listProducts', slug), data)
    return true
  } catch (error) {
    return false
  }
}