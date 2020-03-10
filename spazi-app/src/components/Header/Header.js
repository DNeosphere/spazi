import React from "react";
import Logo from '../../imagesSpazi/logo_blue.png'
import "./Header.css"
import {Link} from 'react-router-dom'


function Header() {
  return (
    <header className="main-header">
      <Link to="/"><img className= 'img-logo' src={Logo} alt="Logo"/></Link>
    </header>
  );
}

export default Header;
