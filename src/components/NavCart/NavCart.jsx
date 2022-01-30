import React, { useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateTotalCount } from '../../Store/Reducers/AddToCart/AddToCart';
// Styles
import { ContentNavCar, HeaderNavCar, BodyNavCar, FooterNavCar} from './NavCartStyles'
import { ButtonGradient } from '../../Styles/GlobalComponents/buttonGradient';
// Icons
import { CgChevronRight } from 'react-icons/cg';
import ProductsAdded from './ProductsAdded';
import CartEmpty from './CartEmpty';



const NavCar = ({ isOpen, onClose}) => {

    const dispatch = useDispatch();

    const { totalCount } = useSelector( (state) => state.addToCart );
    let { productsAdded } = useSelector( (state) => state.addToCart );


    // Created local storage
    if (!localStorage.getItem('ListProductsAdded')) localStorage.setItem('ListProductsAdded', JSON.stringify(productsAdded));

    useEffect(() => {
        
        dispatch( updateTotalCount() );
        localStorage.setItem('ListProductsAdded', JSON.stringify(productsAdded));


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productsAdded])

    return (
        <ContentNavCar isOpen={isOpen} >
            <HeaderNavCar>
                <span className='titleCar' >
                    Mi Carrito
                </span>
                <span className='closeArrow' onClick={onClose}>
                    <CgChevronRight />
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

                {
                    totalCount === 0 
                        ? (
                            <ButtonGradient className='goPayment' onClick={onClose} >
                                Agregar
                            </ButtonGradient>
                        )
                        : (
                            <>
                                <span className='totalCount'>
                                    <span>Total</span>
                                    S/. {totalCount.toFixed(2)} 
                                </span>
                                <ButtonGradient className='goPayment'>
                                    Comprar
                                </ButtonGradient>
                            </>
                        )
                }
            </FooterNavCar>
        </ContentNavCar>
    )
}

export default NavCar
