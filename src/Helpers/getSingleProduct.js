import { DBfirestore } from '../db/connect';
import { getDoc, doc } from 'firebase/firestore';


export const GetSingleProduct = async (id) => {
    
    const refProduct = doc( DBfirestore, `products/${id}` );
    const getSingleProduct = await getDoc(refProduct);

    return getSingleProduct.data();

}

