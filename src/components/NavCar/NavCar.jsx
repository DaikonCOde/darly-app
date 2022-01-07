import React, { useState, useEffect } from 'react'

import { ContentNavCar, HeaderNavCar, BodyNavCar, FooterNavCar} from './NavCarStyles'
import { CgChevronLeft } from 'react-icons/cg';

const listItems = [
    {
        id: 0,
        title: 'Hola mundo',
    }
]


const NavCar = ({ isOpen, onClose}) => {

    const [ totalCount, setTotalCount ] = useState(0);

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
                    listItems.length === 0 
                        ? (
                            <div>
                                Tu carrito esta basio
                            </div>
                        )
                        : (
                            listItems.map((item) => {
                                
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
