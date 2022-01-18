import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../db/connect';
import {  signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
// Icons
import { CgChevronLeft } from 'react-icons/cg'
// Styles
import { ContentNavMenu } from './NavMenuStyles';
import { ButtonGradient } from '../../Styles/GlobalComponents/buttonGradient';

const NavMenu = ( { isOpen, setOpen } ) => {

    const { currentUser } = useSelector( (state) => state.users );

    return (
        <ContentNavMenu isOpen={isOpen}>
            <div className='contentIcon' onClick={() => setOpen(false)} >
                <CgChevronLeft />
            </div>
            <ul className='listMenu'>
                { currentUser 
                    ? (
                        <li className='item'>
                            <ButtonGradient className='signOut' onClick={() => signOut(auth)} >
                                Cerrar Sesión
                            </ButtonGradient>
                        </li>
                    )
                    : (
                        <li className='item'>
                            <Link to='/login'>
                                Iniciar Sesión
                            </Link>
                        </li>
                    )

                }

            </ul>
        </ContentNavMenu>
    )
}

export default NavMenu
