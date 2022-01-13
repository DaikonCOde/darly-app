import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ShoppingCart from '../ShoppingCart/ShoppingCart';
import NavMenu from '../NavMenu/NavMenu';

// Icons
import { CgMenuLeft } from 'react-icons/cg'

// Styles
import { ContentHeader, ContentIcons, ContentLogo } from './HeaderStyles'

const Header = () => {

    const [ open, setOpen ] = useState(false)

    return (
        <>
            <ContentHeader  >
                <ContentIcons onClick={() => setOpen(true)} ><CgMenuLeft  /></ContentIcons>
                <ContentLogo > <Link to='/'>Darly Store</Link> </ContentLogo>
                <ShoppingCart />
            </ContentHeader>
            <NavMenu isOpen={open} setOpen={setOpen} />
        </>
    )
}

export default Header
