import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav>
      <Link to="/Profile" className="Link">
        Profile
      </Link>
      /
      <Link to="/group/:group_id" className="Link">
        Group
      </Link>
      /
      <Link to="/messages" className="Link">
        Messages
      </Link>
    </nav>
  );
};

export default NavBar;
