import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

const LoginLogout = ({ nav, setNav }) => {
	const { logout, currentUser } = useAuth();
	const [error, setError] = useState();
	const navigate = useNavigate();

	async function handleLogout() {
		setError('');
		setNav(!nav);
		try {
			await logout();
			navigate('/');
		} catch {
			setError('Failed to Log Out');
		}
	}

	function navigateLogin() {
		setNav(!nav);
		navigate('/login');
	}

	return (
		<>
			{currentUser ? (
				<li
					className='text-gray-300 hover:text-red-600 hover:scale-125 duration-300'
					onClick={handleLogout}
				>
					Log Out
				</li>
			) : (
				<li
					className='text-gray-300 hover:text-red-600 hover:scale-125 duration-300'
					onClick={navigateLogin}
				>
					Log In
				</li>
			)}
			{error && <p>{error}</p>}
		</>
	);
};

export default LoginLogout;
