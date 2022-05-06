import React from "react";
import {Link} from "react-router-dom"
const NavBar = () => {
  return <nav>
    <Link to="/">Home</Link>
    <Link to="/user">Profile</Link>
    <Link to="/guilds">Guilds</Link>
    <Link to="/messages">Messages</Link>
  </nav>
};

export default NavBar;
