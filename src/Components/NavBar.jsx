import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {

	return (
		<nav>
			<Link to='/Profile' className='Link'>
				Profile
			</Link>{' '}
			/
			<Link to='/groups' className='Link'>
				{' '}
				Groups
			</Link>{' '}
			
		</nav>
	);

};

export default NavBar;
