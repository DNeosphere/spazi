import React from "react";
import Logo from "../../imagesSpazi/logo_blue.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav className='main-navbar'>
        <img className="navbar-logo" src={Logo} alt="Logo" />
        <ul className="nav-links">
          <li>Home</li>
          <li>Features</li>
          <li>About</li>
          <li>The Team</li>
          <Link to='signin'><li>Sign In</li></Link>
          <Link to='signup'><li>Sign Up</li></Link>
        </ul>
      </nav>

  )}

export default Navbar;
