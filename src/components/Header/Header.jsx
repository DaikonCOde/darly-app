import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavCar from '../NavCar/NavCar'

import { CgMenuLeft, CgShoppingCart } from 'react-icons/cg'

import { ContentHeader, ContentIcons, ContentLogo } from './HeaderStyles'

const Header = () => {

    const [open, setOpen] = useState(false);

    console.log(open)

    return (
        <>
            <ContentHeader  >
                <ContentIcons ><CgMenuLeft  /></ContentIcons>
                <ContentLogo > <Link to='/'>Darly Store</Link> </ContentLogo>
                <ContentIcons align='end' onClick={() => setOpen(true)} ><CgShoppingCart  /></ContentIcons>
            </ContentHeader>
            <NavCar 
                isOpen={open}
                onClose={() => setOpen(false)}
            />
        </>
    )
}

export default Header
