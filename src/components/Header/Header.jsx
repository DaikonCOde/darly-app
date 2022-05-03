import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ShoppingCart from '../ShoppingCart/ShoppingCart';
import NavMenu from '../NavMenu/NavMenu';

import Logo from '../../Assets/image/logos.svg';

// Icons
import { CgMenuLeft } from 'react-icons/cg'

// Styles
import { ContainerHeader, ContentHeader, ContentIcons, ContentLogo } from './HeaderStyles';


const Header = () => {

    const [ open, setOpen ] = useState(false)

    return (
        <ContainerHeader>
            <ContentHeader  >
                <ContentIcons onClick={() => setOpen(true)} ><CgMenuLeft  /></ContentIcons>
                <ContentLogo >
                    <Link to='/'>
                        <span className='imgLogo' ><img src={Logo} alt="Darly Store" /></span>
                        Darly Store
                    </Link> 
                </ContentLogo>
                <ShoppingCart />
            </ContentHeader>
            <NavMenu isOpen={open} setOpen={setOpen} />
        </ContainerHeader>  
    )
}

export default Header
