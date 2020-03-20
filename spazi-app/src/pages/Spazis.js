import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import "../styles/forms.css";
import "./Users.css"
import "./../styles/base.css";
import "./../styles/flexbox.css";
import { Sidebar, Footer } from "../components";

function Spazis() {
    let [selected, setSelected] = useState("");
    let [response, setResponse] = useState([]);


    const handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        setSelected(value);

    }

    const handleSubmit = async e => {
        e.preventDefault();
        
    }

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