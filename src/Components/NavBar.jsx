import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="menu">
      <Link to="/" className="Link NavLink btn">
        Home
      </Link>{' '}
      <Link to="/Profile" className="Link NavLink btn">
        Profile
      </Link>{' '}
      <Link to="/groups" className="Link NavLink btn">
        {' '}
        Groups
      </Link>{' '}
    </nav>
  );
};

export default NavBar;
