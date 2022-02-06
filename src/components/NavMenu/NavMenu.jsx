import React, { useState } from "react";
// firebase
import { signOut } from "firebase/auth";
import { auth } from "../../db/connect";
// Icons
import { CgChevronLeft } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md"
// Hooks
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Styles
import { ButtonGradient } from "../../Styles/GlobalComponents/buttonGradient";
import { ContentNavMenu, ListMenu, Item, ListSubMenu, SubItem } from "./NavMenuStyles";

const NavMenu = ({ isOpen, setOpen }) => {
  const [ submenuIsOpen, setSubmenuIsOpen ] = useState(false);
  const { currentUser } = useSelector((state) => state.users);
  const { listCategories } = useSelector((state) => state.categories);

  return (
    <ContentNavMenu isOpen={isOpen}>
      <div className="contentIcon" onClick={() => setOpen(false)}>
        <CgChevronLeft />
      </div>
      <ListMenu className="listMenu">
        <Item submenuIsOpen= {submenuIsOpen } >
          <span  
            onClick={ () => setSubmenuIsOpen( !submenuIsOpen ) } 
          > 
            Categorias
            <span className="icon"><MdKeyboardArrowDown /> </span> 
          </span>
          <ListSubMenu submenuIsOpen= {submenuIsOpen } > 
            {
              listCategories.map(category => (
                <SubItem key={ category.id } onClick={() => setOpen(false)}> 
                  <Link to={`/category?q=${ category.id }`}>
                    { category.name }
                  </Link>
                </SubItem>
              ))
            }
          </ListSubMenu>
        </Item>
        {currentUser ? (
          <>
            <Item >
              <Link to="/dashboard">Dashboard</Link>
            </Item>
            <Item >
              <ButtonGradient className="signOut" onClick={() => signOut(auth)}>
                Cerrar Sesión
              </ButtonGradient>
            </Item>
          </>
        ) : (
          <Item >
            <Link to="/login">Iniciar Sesión</Link>
          </Item>
        )}
      </ListMenu>
    </ContentNavMenu>
  );
};

export default NavMenu;
