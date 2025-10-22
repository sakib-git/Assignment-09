import React from 'react';
import bannerImg from '../assets/Banner-toy-market.png'

const Banner = () => {
  return (
    <div className=" bg-gray-100 py-2">
          <div className="max-w-[1440px] mx-auto ">
   
       <div className='flex justify-center mr-32'>
        <img 
          src={bannerImg} alt="Toy Banner" />
      </div>

      <div className=" text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold  mb-4 ">
          Welcome to Toy Market
        </h1>
        <p className="text-sm md:text-lg  mb-6">
          Playful toys • Trusted shop • Fun for kids of all ages
        </p>

      </div>
    </div>
    </div>
  );
};

export default Banner;