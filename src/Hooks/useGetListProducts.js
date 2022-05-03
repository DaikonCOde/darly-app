import { getDocs, collection } from 'firebase/firestore'
import { DBfirestore } from '../db/connect';

import { useDispatch } from 'react-redux';
import { updateListProducts } from '../Store/Reducers/ListProducts/ListProducts';
import { updateListStatusProducts } from '../Store/Reducers/ListStatusProducts/ListStatusProducts';

export const  useGetListProducts =  () =>  {

  const dispatch = useDispatch();

  const getListProducts = async () => {
    
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

    dispatch( updateListProducts( arrayOfProducts ) );
    dispatch( updateListStatusProducts( arrayOfProducts)  );
  
  }
  


  return [ getListProducts ]
}