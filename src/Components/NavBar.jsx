import { NavLink, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../contexts/authContext';
import Logo from '../images/DnDinder2.png';
import LoginLogout from './LoginLogout.jsx';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { currentUser } = useAuth();
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-full h-[100px] top-0 flex justify-between items-center px-4 bg-black">
      <Link to="/">
        <img src={Logo} alt="Logo Image" style={{ width: '100px' }} />
      </Link>
      <ul className="hidden md:flex mt-4 uppercase bg">
        {currentUser && (
          <>
            <li className="hover:scale-125 duration-300">
              <Link
                to="/Profile"
                className="no-underline text-gray-300 hover:text-red-600 duration-300"
              >
                Profile
              </Link>
            </li>
            <li className="hover:scale-125 duration-300">
              <Link
                to="/groups"
                className="text-gray-300 no-underline hover:text-red-600 duration-300"
              >
                Groups
              </Link>
            </li>
            <li className="hover:scale-125 duration-300">
              <Link
                to="users"
                className="text-gray-300 no-underline hover:text-red-600 duration-300"
              >
                Users
              </Link>
            </li>
          </>
        )}
        <LoginLogout nav={nav} setNav={setNav} />
      </ul>
      {/* Hamburger */}
      {currentUser && (
        <div
          onClick={handleClick}
          className="md:hidden z-10 scale-150 cursor-pointer"
        >
          {!nav ? (
            <FaBars className="text-gray-300 hover:scale-150 hover:text-red-600 duration-300" />
          ) : (
            <FaTimes className="text-gray-300 hover:scale-150 hover:text-red-600 duration-300" />
          )}
        </div>
      )}
      {/* Mobile meny */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'md:hidden fixed inset-0 left-1/2 uppercase gap-8 w-50% h-screen bg-black/70 backdrop-blur-lg flex flex-col justify-center items-center'
        }
      >
        <>
          <li className="py-6 text-4xl hover:scale-110 duration-300">
            <Link
              to="/Profile"
              className="text-gray-300 no-underline hover:text-red-600 duration-300"
            >
              Profile
            </Link>
          </li>
          <li className="py-6 text-4xl hover:scale-110 duration-300">
            <Link
              to="/groups"
              className="text-gray-300 no-underline hover:text-red-600 duration-300"
            >
              Groups
            </Link>
          </li>
          <li className="py-6 text-4xl hover:scale-110 duration-300">
            <Link
              to="users"
              className="text-gray-300 no-underline hover:text-red-600 duration-300"
            >
              Users
            </Link>
          </li>
        </>
        <li className="py-6 text-4xl">
          <LoginLogout nav={nav} setNav={setNav} />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
