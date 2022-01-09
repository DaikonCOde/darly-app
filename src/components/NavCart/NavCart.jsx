import React, { useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateTotalCount } from '../../Store/Reducers/AddToCart/AddToCart';
// Styles
import { ContentNavCar, HeaderNavCar, BodyNavCar, FooterNavCar} from './NavCarStyles'
// Icons
import { CgChevronLeft } from 'react-icons/cg';
import ProductsAdded from './ProductsAdded';
import CartEmpty from './CartEmpty';



const NavCar = ({ isOpen, onClose}) => {

    const dispatch = useDispatch();

    const { totalCount } = useSelector( (state) => state.addToCart );
    const { productsAdded } = useSelector( (state) => state.addToCart )
    console.log(totalCount)

    useEffect(() => {

        dispatch( updateTotalCount() );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productsAdded])

    return (
        <ContentNavCar isOpen={isOpen} >
            <HeaderNavCar>
                <span className='closeArrow' onClick={onClose}>
                    <CgChevronLeft />
                </span>
                <span className='titleCar' >
                    Mi Carrito
                </span>
            </HeaderNavCar>
            <BodyNavCar>
                {
                    productsAdded.length === 0 
                        ? <CartEmpty />
                        : <ProductsAdded products={productsAdded} />
                }
            </BodyNavCar>
            <FooterNavCar>
                <span className='totalCount'>
                    S/. {totalCount}
                </span>
                <span className='goPayment'>
                    Comprar
                </span>
            </FooterNavCar>
        </ContentNavCar>
    )
}

export default NavCar
