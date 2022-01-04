import React from 'react'
import { CgMenuLeft, CgShoppingCart } from 'react-icons/cg'

import { ContentHeader, ContentIcons, ContentLogo } from './HeaderStyles'

const Header = () => {
    return (
        <ContentHeader  >
            <ContentIcons ><CgMenuLeft  /></ContentIcons>
            <ContentLogo > <a href='/'>Darly Store</a> </ContentLogo>
            <ContentIcons align='end' ><CgShoppingCart  /></ContentIcons>
        </ContentHeader>
    )
}

export default Header
