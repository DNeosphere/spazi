import React, { Component } from "react";
import Logo from '../../imagesSpazi/logo_blue.png'
import { Link } from 'react-router-dom'

import "./Search.css"


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dog: "dog",
            cat: "cat",
            plant: "plant",
            selectedValue: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
    }

    handleSubmit(e) {
        e.preventDefault();

        const url = 'https://spazi.rocks/api/spazis';
        if (this.state.selectedValue != "") {
            url += "/" + this.state.selectedValue;
        }
        const data = {
            dog: this.state.dog,
            cat: this.state.cat,
            plant: this.state.plant
        };

        async function postData(url = '') {
            // Default options are marked with *
            const response = await fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                /*headers: {
                    'Content-Type': 'application/json'
                },
                //body: JSON.stringify(data) // body data type must match "Content-Type" header*/
            });
            return await response.json().catch(err => console.log(err.message)) // parses JSON response into native JavaScript objects
        }
        postData(url).then(resp => {
            console.log(resp);
        })

    }

    render() {
        return (
            <div className="search-container">
                <form className='search-form' onSubmit={this.handleSubmit}>
                    <label for="type">Select a type: </label>
                    <select className='check-form--input' onChange={this.handleChange}>
                        <option value={this.state.dog}>Dog</option>
                        <option value={this.state.cat}>Cat</option>
                        <option value={this.state.plant}>Plant</option>
                    </select>
                    <input className='check-form--input' type='checkbox' id='dog' value={this.state.dog} onChange={this.handleChange} />
                    <div className="dogIcon" style={{ backgroundImage: `url(../../imagesSpazi/woman.png})` }}></div>
                    <input className='check-form--input' type='checkbox' id='cat' value={this.state.cat} onChange={this.handleChange} />
                    <label for="cat"> Cat</label><br></br>
                    <input className='check-form--input' type='checkbox' id='plant' value={this.state.plant} onChange={this.handleChange} />
                    <label for="plant"> Plant</label><br></br>

                    <input className='check-form--button submit-btn' type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default Search
