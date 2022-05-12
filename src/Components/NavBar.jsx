import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav>
      <Link to="/Profile" className="Link NavLink">
        Profile
      </Link>{' '}
      /
      <Link to="/groups" className="Link NavLink">
        {' '}
        Groups
      </Link>{' '}
    </nav>
  );
};

export default NavBar;
