import React, { Component } from "react";
import { Link, Redirect} from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import "../styles/forms.css";
import "./../styles/base.css";
import "./../styles/flexbox.css";
import { Sidebar, Email } from "../components";

class Users extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div>
                
                <Sidebar />
            </div>
        )
    }
}


export default Users