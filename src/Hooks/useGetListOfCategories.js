import { useEffect } from 'react';

import { getDocs, collection } from 'firebase/firestore'
import { DBfirestore } from '../db/connect';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { updateListCategories } from '../Store/Reducers/Categories/Categories';

export const useGetListOfCategories = () => {
  
  const dispatch = useDispatch();
  const { listCategories } = useSelector( (state) => state.categories);

  const getListOfCategories = async () => {

    if( listCategories.length !== 0 ) return;

    const categories = await getDocs(collection(DBfirestore, 'categories'));

    const includeIdOfCategories = [];

    categories.forEach(category => {
      const dataCategory = category.data();
      const newObjetOfCategory = {
        id: category.id,
        ...dataCategory
      }

      includeIdOfCategories.push(newObjetOfCategory);
    });

    dispatch( updateListCategories( includeIdOfCategories ) )

  }

  useEffect(() => {
    getListOfCategories();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

};