import React from  'react'
import { Link } from "react-router-dom";
import './Banner.css';

function Banner () {
    return (
        <div className="banner">
            <div className="banner-img"></div>
            <div className="banner-text">
                <h1 className="headline">The Care App</h1>
                <p className="tagline">Relax, we will take care of them for you</p>
                <Link to='signup'><input className='get-started-btn' type="submit" value="Get started" /></Link>
            </div>
           
        </div>
    )
}

export default Banner
