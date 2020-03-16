import React, { Component } from "react";
import { Link, Redirect} from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import "../styles/forms.css";
import "./Users.css"
import "./../styles/base.css";
import "./../styles/flexbox.css";
import { Sidebar, Results, Footer, Search } from "../components";

class Users extends Component {
    constructor () {
        super()
    }


    render () {
        return (
            <div>
                <div className="users-main-container" style={{display: "flex"
                }}>
                    <Sidebar />
                    <div className="results-list">
                        <Search />
                        <Results />
                        <Results />
                        <Results />
                        <Results /> 
                    </div>
                </div>
                <Footer />
            </div>
           
        )
    }
}


export default Users