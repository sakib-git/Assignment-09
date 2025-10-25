import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, setUser, LogOUt } = use(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    LogOUt()
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="bg-base-200">
      <div className="max-w-[1440px] flex justify-between items-center  mx-auto p-2 max-md:flex-col max-md:gap-3 max-md:py-5">
        <div className="flex  items-center gap-3">
          <div className="bg-yellow-400 text-white text-2xl p-3 rounded-xl shadow-md">🧸</div>
          <div>
            <h2 className="text-xl font-bold">Toy Market</h2>
            <p className="text-sm text-gray-600">Playful toys • Trusted shop</p>
          </div>
        </div>

        <div className="flex gap-3 items-center font-semibold">
          <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-md font-semibold  ${isActive ? 'bg-blue-600 text-white   ' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`}>
            Home
          </NavLink>
          <NavLink to="/alltoys" className={({ isActive }) => `px-4 py-2 rounded-md font-semibold  ${isActive ? 'bg-blue-600 text-white   ' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`}>
            AllToys
          </NavLink>
          {user && (
            <NavLink to="/profile" className={({ isActive }) => `px-4 py-2 rounded-md font-semibold  ${isActive ? 'bg-blue-600 text-white   ' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`}>
              Profile
            </NavLink>
          )}
        </div>

        <div>
          {user ? (
            <div className="flex items-center gap-2">
              <div className="relative group">
                <div onClick={() => navigate('/profile')} className="size-10 bg-zinc-400 rounded-full overflow-hidden">
                  <img className="size-full object-cover" src={user.photoURL} alt="User photo" />
                </div>

                <span className="text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity dur bg-black/70 rounded-md py-1 px-2 text-white absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 ">
                  {user.email}
                  <span
                    className="absolute -top-2 left-1/2 
                    border-l-8 border-l-transparent 
                    border-r-8 border-r-transparent 
                    border-b-8 border-b-black/70"
                  ></span>
                </span>
              </div>
              <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600  font-medium text-[12px] outline">
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600  font-medium text-[12px] outline">
              LOG IN
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
