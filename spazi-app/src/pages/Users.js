import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import "../styles/forms.css";
import "./Users.css"
import "./../styles/base.css";
import "./../styles/flexbox.css";
import { Sidebar, Results, Footer, Search } from "../components";

function Users() {
    let [dog, cat, plant] = [useState("dog"), useState("cat"), useState("plant")];
    let [selected, setSelected] = useState("");
    let [response, setResponse] = useState([]);


    const handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        setSelected(value);

    }

    const handleSubmit = async e => {
        e.preventDefault();

        const url = 'https://spazi.rocks/api/spazis';

        // Default options are marked with *
        async function getData() {
            const response = await fetch(url);
            let data = await response.json();
            if (selected !== "") {
                let newData = [];
                for (let item of data) {
                    if (item.specialization === selected) {
                        newData.push(item);
                    }
                }
                data = newData;
            }
            return data;
        }

        const data = await getData().then(resp => setResponse(resp));



    }
    const resultComponent = response.map(item => <Results key={item.id} spazi={item} />)
    return (
        <div>
            <div className="users-main-container" style={{
                display: "flex"
            }}>
                <Sidebar />
                <div className="results-list">
                    <div className="search-container">
                        <form className='search-form' onSubmit={handleSubmit}>
                            <select className='select-form--input' value={selected} onChange={handleChange}>
                                <option className="select-form--option" value=""> Look after my ...</option>
                                <option className="select-form--option" value="dog">Dog</option>
                                <option className="select-form--option" value="cat">Cat</option>
                                <option className="select-form--option" value="plant">Plant</option>
                            </select>
                            <input className='check-form--button submit-btn' type="submit" value="Find a Spazi!" />
                        </form>
                    </div>
                    {resultComponent}
                </div>
            </div>
            <Footer />
        </div>

    )
}


export default Users