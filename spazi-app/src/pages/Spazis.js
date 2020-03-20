import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import "../styles/forms.css";
import "./Users.css"
import "./../styles/base.css";
import "./../styles/flexbox.css";
import { Sidebar, Results, Footer, Search } from "../components";

function Spazis() {
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
            </div>
            <Footer />
        </div>

    )
}


export default Spazis