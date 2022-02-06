import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const HeaderDefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
};

export default HeaderDefaultLayout;
