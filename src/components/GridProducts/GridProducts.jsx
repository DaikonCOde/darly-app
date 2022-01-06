import React from 'react'
import { ContentProducts, SingleProduct } from './GridProductsStyles'

const products = [
    {
        title: 'S6 galaxy lite',
        id: 1,
        stock: true,
        price: 455,
    },
    {
        title: 'PS 5 Lite',
        id: 2,
        stock: false,
        price: 499,
    },
    {
        title: 'Smath Watch',
        id: 3,
        stock: true,
        price: 249,
    },
    {
        title: 'Note Book i7',
        id: 4,
        stock: true,
        price: 1249,
    },
]

const GridProducts = () => {
    return (
        <ContentProducts>
            {
                products.map( (product) => (
                    <SingleProduct key={product.id}>
                        {product.title}
                    </SingleProduct>
                ) )
            }
        </ContentProducts>
    )
}

export default GridProducts
