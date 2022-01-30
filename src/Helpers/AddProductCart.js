import { useSelector, useDispatch } from "react-redux";
import { addProduct, incrementCountProduct } from "../Store/Reducers/AddToCart/AddToCart";

export const AddProductCart = (id) => {
  
  const { productsAdded } = useSelector( (state) => state.addToCart );
  const { products } = useSelector( (state) => state.listProducts )

  const dispatch = useDispatch();
  
  const submitProductCart = (id) => {
  
    const productToBeAdded = products.filter( (product) => product.id === id  );
  
    const filterProductos = productsAdded.find(product => product.id === id);
  
    filterProductos === undefined
        ? dispatch( addProduct(...productToBeAdded) )
        : dispatch( incrementCountProduct(id) )
  }

  return [ submitProductCart ];
}