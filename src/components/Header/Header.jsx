import React from 'react';
import { Link } from 'react-router-dom';

import ShoppingCart from '../ShoppingCart/ShoppingCart';

// Icons
import { CgMenuLeft } from 'react-icons/cg'

// Styles
import { ContentHeader, ContentIcons, ContentLogo } from './HeaderStyles'

const Header = () => {

    return (
        <>
            <ContentHeader  >
                <ContentIcons ><CgMenuLeft  /></ContentIcons>
                <ContentLogo > <Link to='/'>Darly Store</Link> </ContentLogo>
                <ShoppingCart />
            </ContentHeader>

        </>
    )
}

export default Header
