import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/authContext";

const Header = ({user}) => {
  const {logout, currentUser} = useAuth()
  const [error, setError] = useState()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")
    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to Log Out")
    }
  }

  return (
    <div className="Header" >
      {currentUser ? (<Link to="/" className="Link" id="headerLink"><h1> Welcome to DnDinder™️ </h1></Link>
      ):(<h1> Welcome to DnDinder™️ </h1>)}
      {currentUser && <Button variant="link" onClick={handleLogout}>Log Out</Button>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Header;
