import React from 'react';
import Navbar from '../Componet/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componet/Footer';

const Root = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar></Navbar>
      <div className='flex-1'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;