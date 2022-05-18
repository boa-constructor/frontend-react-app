import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  return (
    <div>
      {currentUser && (
        <li
          className="text-gray-300 hover:text-red-600 hover:scale-125 duration-300"
          onClick={handleLogout}
        >
          Log Out
        </li>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Header;
