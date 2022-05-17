import React from 'react';
import { Link } from 'react-router-dom';
const Header = ({ user }) => {
  return (
    <div className='Header'>
      {user ? (
        <Link to='/' className='Link' id='headerLink'>
          <h1> Welcome to DnDinder™️ </h1>
        </Link>
      ) : (
        <h1> Welcome to DnDinder™️ </h1>
      )}
    </div>
  );
};

export default Header;
