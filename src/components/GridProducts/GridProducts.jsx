import React from 'react'
import { Link } from 'react-router-dom' 

// Reducers
import { addProduct, incrementCountProduct } from '../../Store/Reducers/AddToCar/AddToCar';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import { ContentProducts, SingleProduct, ContentTitle, ContentImage, ContentPrice } from './GridProductsStyles'

// Icons
import { CgShoppingCart } from 'react-icons/cg'


const products = [
    {
        title: 'S6 galaxy lite',
        id: 1,
        stock: true,
        price: 455,
        rating: 4.5,
        img_url: 'HeadsetImage.png',
        slug: 's6-galaxy-lite'
    },
    {
        title: 'PS 5 Lite',
        id: 2,
        stock: false,
        price: 499,
        rating: 4.7,
        img_url: 'image22.png',
        slug: 'ps-5-lite'
    },
    {
        title: 'Smarth Watch',
        id: 3,
        stock: true,
        price: 249,
        rating: 3.5,
        img_url: 'image22.png',
        slug: 'smarth-watch'
    },
    {
        title: 'Note Book i7',
        id: 4,
        stock: true,
        price: 1249,
        rating: 4.9,
        img_url: 'HeadsetImage.png',
        slug: 'note-book-i7'
    },
]

const GridProducts = () => {

    const { productsAdded } = useSelector( (state) => state.addToCar );

    const dispatch = useDispatch();
    
    console.log(productsAdded);  
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
                        <Link to={`/${product.slug}`}>
                            <ContentTitle>
                                <h2>{product.title}</h2>
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
