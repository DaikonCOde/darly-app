import React from 'react'

import {  useDispatch } from 'react-redux';
import { incrementCountProduct, decrementCountProduct, removeProduct } from '../../Store/Reducers/AddToCart/AddToCart';

import { ContentProductsAdded, 
        SingleProductAdded,
        ImageProduct,
        DescriptionProduct,
        CountProduct,
        ButtonsCount,
        DeleteProduct
    } from './ProductsAddedStyles'

import { MdStar , MdDeleteOutline} from 'react-icons/md';

const ProductsAdded = ({ products }) => {

    const dispatch = useDispatch();

    return (
        <ContentProductsAdded>
            {
                products.map( (product) => (
                    <SingleProductAdded as='li' key={product.id}>
                        <ImageProduct>
                            <img className='imageProduct' src={require(`../../Assets/image/${product.img_url}`)} alt={product.title} />
                        </ImageProduct>
                        <DescriptionProduct>
                            <h3 className='titleProduct'>{product.title}</h3>
                            <span className='ratingProduct'>{product.rating} <span><MdStar /></span></span>
                            <span className='priceProduct' ><span>S/. {((product.price * 100) / 75).toFixed(2) }</span>S/. {product.price} </span>
                        </DescriptionProduct>
                        <CountProduct>
                            <ButtonsCount as='button' type='button' onClick={() => dispatch(decrementCountProduct(product.id)) } > - </ButtonsCount>
                            <span className='count'> {product.count} </span>
                            <ButtonsCount as='button' type='button' onClick={() => dispatch(incrementCountProduct(product.id))} > + </ButtonsCount>
                        </CountProduct>
                        <DeleteProduct onClick={ () => dispatch( removeProduct(product.id) ) } >
                            <span className='deleteIcon' ><MdDeleteOutline /></span>
                            <span className='delete' >Eliminar</span>
                        </DeleteProduct>
                    </SingleProductAdded>
                )
                )
            }
        </ContentProductsAdded>
    )
}

export default ProductsAdded;
