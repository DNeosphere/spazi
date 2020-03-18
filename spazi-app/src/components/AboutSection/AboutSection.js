import React from 'react'

import "./AboutSection.css"

function AboutSection () {
    return (
        <div className="row about-row">
            <div className="primary col about-col">
                <h2>About Us</h2>
                <p></p>
                <p>
                    The idea of Spazi was born from a group of friends, brainstorming to create
                    something nice that allows to make our lives easier. We know how busy are these days,
                    and we also know how adorable pets are..
                </p>
                <p>
                    .. so we wanted to create a solution for busy people who also want to love a pet. Spazi 
                    is also the portfolio project for Holberton School.
                </p>
                <p className='special-p about-p'>
                    Animal lovers + software enginers = {"<"}3 Spazi! {"<"}3 
                </p>

            </div>
	</div>
    )
}

export default AboutSection