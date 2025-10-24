import React, { use } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'kitzo/react';
import { AuthContext } from '../Provider/AuthProvider';
import AppLoading from '../components/AppLoading';

const Root = () => {
  const { appLoading } = use(AuthContext);

  return (
    <>
      {appLoading ? (
        <AppLoading></AppLoading>
      ) : (
        <div className="flex flex-col h-screen">
          <Navbar></Navbar>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
          <ToastContainer position='top-right' />
        </div>
      )}
    </>
  );
};

export default Root;
