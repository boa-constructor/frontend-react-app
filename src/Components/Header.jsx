import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

const Header = ({ user }) => {
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();

  async function handleLogout() {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to Log Out');
    }
  }

  function handleLogin() {
    navigate('/login');
  }

  return (
    <div>
      {currentUser ? (
        <li
          className="text-gray-300 hover:text-red-600 hover:scale-125 duration-300"
          onClick={handleLogout}
        >
          Log Out
        </li>
      ) : (
        <li
          className="list-none text-black-300 bold hover:text-red-600 hover:scale-125 duration-300"
          onClick={handleLogin}
        >
          Log In
        </li>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Header;
