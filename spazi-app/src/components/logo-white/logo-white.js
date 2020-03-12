import React from "react";
import {Link} from 'react-router-dom'

import './logo-white.css'
import Logo from '../../imagesSpazi/logo_white.png'


function LogoWhite () {
    return (
    <Link to='/'><img className="logo-white" src={Logo}/></Link>
    )
}

export default LogoWhite