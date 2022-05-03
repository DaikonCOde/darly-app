import { getDocs, collection } from 'firebase/firestore'
import { DBfirestore } from '../db/connect';

export async function getProducts () {

    const listProducts = await getDocs(collection(DBfirestore, 'listProducts'));
    const arrayOfProducts = [];

    listProducts.forEach((doc) => {
        const product = doc.data()
        const featureProduct = {
            id: doc.id,
            ...product
        }
        arrayOfProducts.push(featureProduct);
    })


    return arrayOfProducts;
}