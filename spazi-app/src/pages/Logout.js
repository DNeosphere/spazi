import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Header, Footer } from "../components";


import "./Logout.css";
import "../styles/base.css";
import "./../styles/flexbox.css";


class Logout extends Component {
    constructor() {
        super();
        this.state = {
            response: {}
        }
    }

    componentDidMount() {
        const url = 'https://spazi.rocks/api/logout';

        async function getLogout() {
            const response = await fetch(url);
            let data = await response.json();

            return data;
        }
        const response = getLogout().then(resp => this.setState({ response: resp }));
    }

    render() {
        console.log("Response", this.state.response)
        if (this.state.response.status === "OK") {
            this.state.response.message += " your logout was successful"
        }
        return (
            <div className="container--logout">
                <Header />
                <div className="container--message">
                    <h1 className="message">
                        {this.state.response.message}
                    </h1>
                </div>
                <Footer />
            </div>
            
        )
    }
}

export default Logout;
