import React from 'react'

// Styles

import { ContentCartEmpty, ImageCart, DescriptionCart } from './CartEmptyStyles'

import EmptyCar from '../../Assets/image/empty-cart.svg'

const CarEmpty = () => {
    return (
        <ContentCartEmpty>
            <ImageCart>
                <img src={EmptyCar} alt="" />
            </ImageCart>
            <DescriptionCart>
                <p>Tu carrito esta vacio :c</p>
            </DescriptionCart>
        </ContentCartEmpty>
    )
}

export default CarEmpty
