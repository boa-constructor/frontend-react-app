import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <details>
      <summary></summary>
      <nav className="menu">
        <Link to="/" className="Link NavLink">
          Home
        </Link>{' '}
        <Link to="/Profile" className="Link NavLink">
          Profile
        </Link>{' '}
        <Link to="/groups" className="Link NavLink">
          {' '}
          Groups
        </Link>{' '}
      </nav>
    </details>
  );
};

export default NavBar;
