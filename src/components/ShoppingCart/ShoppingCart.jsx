import React, {useState} from 'react'


// Redux
import { useSelector } from 'react-redux';

import { ContentShoppingCart } from './ShoppingCartStyles';
import { CgShoppingCart } from 'react-icons/cg'
import NavCar from '../NavCart/NavCart';

const ShoppingCart = ( ) => {

    const [open, setOpen] = useState(false);

    const { productsAdded } = useSelector( (state) => state.addToCart );

    return (
        <>
            <ContentShoppingCart
                align='end' 
                onClick={() => setOpen(true)}
                className='shoppingCart'
            >
                <CgShoppingCart  /> 
                <span className='countProducts'>{productsAdded.length}</span> 
            </ContentShoppingCart>

            <NavCar 
                isOpen={open}
                onClose={() => setOpen(false)}
            />
        </>
    )
}

export default ShoppingCart
