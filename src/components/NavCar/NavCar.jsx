import React, { useState, useEffect } from 'react'

// Redux
import { useSelector } from 'react-redux';
// Styles
import { ContentNavCar, HeaderNavCar, BodyNavCar, FooterNavCar} from './NavCarStyles'
// Icons
import { CgChevronLeft } from 'react-icons/cg';



const NavCar = ({ isOpen, onClose}) => {

    const [ totalCount, setTotalCount ] = useState(0);
    const { productsAdded } = useSelector( (state) => state.addToCar )

    useEffect(() => {
        setTotalCount(0)
    }, [])

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
                        ? (
                            <div>
                                Tu carrito esta basio
                            </div>
                        )
                        : (
                            productsAdded.map((item) => {
                                
                                return (
                                    <div key={item.id}>
                                        {item.title}
                                    </div>
                                )
                            })
                        )
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
