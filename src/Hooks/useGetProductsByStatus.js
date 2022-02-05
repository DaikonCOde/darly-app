// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateListStatusProducts } from "../Store/Reducers/ListStatusProducts/ListStatusProducts";

export const useGetProductsByStatus = () => {
  const { products } = useSelector((state) => state.listProducts);
  const dispatch = useDispatch();

  const getProductsByStatusProduct = (type) => {

    if ( type === 'all') {
      dispatch(updateListStatusProducts(products));
      return;
    }

    const listOfFilterProducts = products.filter(
      (product) => product.statusProduct[type]
    );

    dispatch(updateListStatusProducts(listOfFilterProducts));
  };

  return [getProductsByStatusProduct];
};
