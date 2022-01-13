import React from 'react'
import { CgChevronLeft } from 'react-icons/cg'
import { Link } from 'react-router-dom'

import { ContentNavMenu } from './NavMenuStyles'

const NavMenu = ( { isOpen, setOpen } ) => {
    return (
        <ContentNavMenu isOpen={isOpen}>
            <div className='contentIcon' onClick={() => setOpen(false)} >
                <CgChevronLeft />
            </div>
            <ul className='listMenu'>
                <li className='item'>
                    <Link to='/login'>
                        Iniciar Sesión
                    </Link>
                </li>
            </ul>
        </ContentNavMenu>
    )
}

export default NavMenu
