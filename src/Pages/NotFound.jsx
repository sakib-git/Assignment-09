import React from 'react';
import errorImg from '../assets/error-404.png'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <img src={errorImg} alt="" />
    </div>
  );
};

export default NotFound;