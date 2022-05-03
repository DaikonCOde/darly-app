import { getDocs, collection } from 'firebase/firestore'
import { DBfirestore } from '../db/connect';

// Redux
import { useDispatch} from 'react-redux';
import { updateListCategories } from '../Store/Reducers/Categories/Categories';

export const useGetListOfCategories = () => {
  
  const dispatch = useDispatch();
  const getListOfCategories = async () => {


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

  return [ getListOfCategories ]

};