import { useState } from 'react';
import { getDocs, collection, query, where, doc } from 'firebase/firestore';
import { DBfirestore } from '../db/connect';

export const useGetListProductsByCategory = () => {

  const [ listProducts, setListProducts ] = useState([]);
  const [ error,setError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);

  const getListProductsByCategory = async (category) => {
    setIsLoading(true);
    try {
      const q = query( collection( DBfirestore, 'listProducts' ),  where( 'category', '==', doc( DBfirestore, 'categories', category ) ) )
  
      const result = await getDocs(q);
  
      const filterProducts = [];
  
      result.forEach((doc) => {
        const dataProduct = {
          id: doc.id,
          ...doc.data()
        } 
  
        filterProducts.push(dataProduct);
      });
  
      setListProducts(filterProducts)
      
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);

  };

  return [ getListProductsByCategory, listProducts, isLoading, error ];

};