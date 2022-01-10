import React from 'react'
import { Link } from 'react-router-dom' 

// Reducers
import { addProduct, incrementCountProduct } from '../../Store/Reducers/AddToCart/AddToCart';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import { ContentProducts, SingleProduct, ContentTitle, ContentImage, ContentPrice } from './GridProductsStyles'

// Icons
import { CgShoppingCart } from 'react-icons/cg';
import { MdStar } from 'react-icons/md';


const GridProducts = () => {

    const { productsAdded } = useSelector( (state) => state.addToCart );
    const { products } = useSelector( (state) => state.listProducts )

    const dispatch = useDispatch();
    
    const submitProductCar = (id) => {

        const productToBeAdded = products.filter( (product) => product.id === id  );
    
        const filterProductos = productsAdded.find(product => product.id === id);
        
        filterProductos === undefined
            ? dispatch( addProduct(...productToBeAdded) )
            : dispatch( incrementCountProduct(id) )
    }

    return (
        <ContentProducts>
            {
                products.map( (product) => (
                    <SingleProduct key={product.id}>
                        <Link to={`/producto/${product.slug}`}>
                            <ContentTitle>
                                <h2 className='titleProduct'>{product.title}</h2>
                                <span className='ratingProduct'>{ product.rating } <span><MdStar /></span> </span>
                            </ContentTitle>
                            <ContentImage>
                                <img src={require(`../../Assets/image/${product.img_url}`)} alt={product.title} />
                            </ContentImage>
                        </Link>
                            <ContentPrice>
                                <div className='price'>
                                    <span className='priceTotal'>S/. {((product.price * 100) / 75).toFixed(2) }</span>
                                    <span className='priceDesc' >S/. {product.price}</span>
                                </div>
                                <button type='button' className='addToCart' onClick={ () => submitProductCar(product.id) } >
                                    <CgShoppingCart />
                                </button>
                            </ContentPrice>
                    </SingleProduct>
                ) )
            }
        </ContentProducts>
    )
}

export default GridProducts
