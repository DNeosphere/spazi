import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import "./AuthComponent.css"


class AuthComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
            status: undefined
        };
    }

    componentDidMount() {
        this.setState({ user: this.getData() });
        //console.log("DataAuthComp", this.state.user);
    }

    async getData() {
        const url = 'https://spazi.rocks/api/users/me';
        const response = await fetch(url);
        this.setState({ status: response.status });
        let data = await response.json();
        localStorage.setItem("user-name", data.name);
        localStorage.setItem("user-id", data.id);
        return data;
    }

    render() {
        if (this.state.status === undefined) {
            return (
                <div style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
                    );
                }
        
        if (this.state.status === 401) {
                        this.props.history.push('/signin');
                }
        
        
                return this.props.children;
            }
        
        
        }
        
export default withRouter(AuthComponent);
