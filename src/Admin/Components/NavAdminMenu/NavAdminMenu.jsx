import React from 'react';

import { Link } from 'react-router-dom';

import { ContentNavAdminMenu, Brand, ContentNavItems } from './NavAdminMenuStyles';

import { MdDashboard } from 'react-icons/md';

const NavAdminMenu = (  ) => {
  return (
    <>
      <ContentNavAdminMenu>
        <Brand>Darly Store</Brand>
        <ContentNavItems>
          <ul>
            <li className="navItem" >
              <Link to='/dashboard'>
                <span>
                  <MdDashboard />
                </span>
                Dashboard
              </Link>
            </li>
            <li className="navItem" >
              <Link to='/dashboard/products'>
                <span>
                  <MdDashboard />
                </span>
                Products
              </Link>
            </li>
          </ul>
        </ContentNavItems>
      </ContentNavAdminMenu>

    </>
  )
};

export default NavAdminMenu;
