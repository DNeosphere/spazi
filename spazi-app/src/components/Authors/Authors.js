import React from 'react'
import { Link } from "react-router-dom"

import "./Authors.css"
import dani from '../../imagesSpazi/dani.jpg'
import dioni from '../../imagesSpazi/dioni.jpeg'
import charles from '../../imagesSpazi/charles.png'

function Authors () {
    return (
        <div className="row authors-row" >
            <div className="primary col">
                <img className="auth-img" src={dani}/>
                <h2>Daniela Gomez</h2>
                <h3>Front-End</h3>
                <div className="social-media">
                    <a href="https://twitter.com/darkinss">
                        <div className="twitter"></div>
                    </a>
                    <a href="https://github.com/DNeosphere">
                        <div className="github"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/danigomezdev/">
                        <div className="linkedin"></div>
                    </a>
                </div>
            </div>
            <div className="primary col">
                <img className="auth-img" src={dioni}/>
                <h2>Dionisio Arango</h2>
                <h3>Back-End</h3>
                <div className="social-media">
                    <a href="https://twitter.com/arango_dionisio">
                        <div className="twitter"></div>
                    </a>
                    <a href="https://github.com/Dioni1195">
                        <div className="github"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/dionisio-andres-arango-rojas-318a31182">
                        <div className="linkedin"></div>
                    </a>
                </div>
            </div>
            <div className="primary col">
                <img className="auth-img" src={charles}/>
                <h2>Carlos Zuluaga</h2>
                <h3>DevOps</h3>
                <div className="social-media">
                    <a href="https://twitter.com/carlosz22">
                        <div className="twitter"></div>
                    </a>
                    <a href="https://github.com/carlosz22">
                        <div className="github"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/carlos-eduardo-zuluaga/">
                        <div className="linkedin"></div>
                    </a>
                </div>
            </div>

	</div>
    )
}

export default Authors