import React from 'react'

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
            </div>
            <div className="primary col">
                <img className="auth-img" src={dioni}/>
                <h2>Dionisio Arango</h2>
                <h3>Back-End</h3>
            </div>
            <div className="primary col">
                <img className="auth-img" src={charles}/>
                <h2>Carlos Zuluaga</h2>
                <h3>DevOps</h3>
            </div>

	</div>
    )
}

export default Authors