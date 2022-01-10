

import { useSelector } from 'react-redux';

const useSingleProduct = (slug) => {
    
    const { products } = useSelector( state => state.listProducts );

    const singleProduct = products.find( product => product.slug === slug );

    return singleProduct;

}

export default useSingleProduct
