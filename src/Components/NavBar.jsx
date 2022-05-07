import React from "react";
import {Link} from "react-router-dom"
const NavBar = () => {
  return <nav>
    <Link to="/user" className="Link">Profile</Link>/
    <Link to="/guilds" className="Link">Guilds</Link>/
    <Link to="/messages" className="Link">Messages</Link>
  </nav>
};

export default NavBar;
