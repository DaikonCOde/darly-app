import React, { useEffect, useState } from 'react'
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

import config from '../../config';

const NavCar = ({ isOpen, onClose}) => {

    const dispatch = useDispatch();
    const [messageWhatsApp, setMessageWhatsApp] = useState('');
    const { totalCount } = useSelector( (state) => state.addToCart );
    let { productsAdded } = useSelector( (state) => state.addToCart );

    // Created local storage
    if (!localStorage.getItem('ListProductsAdded')) localStorage.setItem('ListProductsAdded', JSON.stringify(productsAdded));

    useEffect(() => {
        
        dispatch( updateTotalCount() );
        localStorage.setItem('ListProductsAdded', JSON.stringify(productsAdded));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productsAdded])

    useEffect(() => {
        const defaultMessage = `https://api.whatsapp.com/send?phone=${config.PHONE}&text=Hola%20Darly%20Store%20quiero%20adquirir%20estos%20productos:`
        const products = JSON.parse(localStorage.getItem('ListProductsAdded'));

        const messageProducts = []
        
        products.forEach((product, index) => {
            const addMessage = `%0AProducto%20${index + 1}%0A-%20Nombre:%20${product.title.replaceAll(' ', '%20')}%0A-%20Precio:%20S./%20${product.price}%0A-%20Cantidad:%20${product.count}%0A-%20Total:%20${product.price * product.count}`;

            messageProducts.push(addMessage);
        })
        
        setMessageWhatsApp(defaultMessage + messageProducts.join());

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
                                <ButtonGradient as='a' className='goPayment' href={messageWhatsApp} target='_blank' >
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
