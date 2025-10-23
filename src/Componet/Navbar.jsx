import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='bg-base-200'>
    <div className='max-w-[1440px] flex justify-between items-center  mx-auto p-2 max-md:flex-col max-md:gap-3 max-md:py-5'>
    <div className="flex  items-center gap-3">
      <div className="bg-yellow-400 text-white text-2xl p-3 rounded-xl shadow-md">🧸</div>
      <div>
        <h2 className="text-xl font-bold">Toy Market</h2>
        <p className="text-sm text-gray-600">Playful toys • Trusted shop</p>
      </div>
    </div>

  <div className='flex gap-3 items-center font-semibold'>

  <NavLink to="/" className={({ isActive }) =>`px-4 py-2 rounded-md font-semibold  ${isActive ? 'bg-blue-600 text-white   ': 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`}>
  Home
</NavLink>
  <NavLink to='/alltoys' className={({ isActive }) =>`px-4 py-2 rounded-md font-semibold  ${isActive ? 'bg-blue-600 text-white   ': 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`}>
  AllToys
</NavLink>
  <NavLink to='/profile'  className={({ isActive }) =>`px-4 py-2 rounded-md font-semibold  ${isActive ? 'bg-blue-600 text-white   ': 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`}>
  Profile
</NavLink>

 
</div>

     <div>
          <NavLink to='/login' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition font-medium text-[12px] outline">
            LOG IN
          </NavLink>
        </div>


    </div>
    </div>
  );
};

export default Navbar;