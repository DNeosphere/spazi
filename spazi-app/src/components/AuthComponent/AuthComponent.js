import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import "./AuthComponent.css"


class AuthComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            id: undefined,
            status: undefined
        };
    }

    componentDidMount() {
        const response = this.getData()
        .then(resp => this.setState({ name: resp.name, id: resp.id }));

        //console.log("DataAuthComp", this.state.user);
    }

    async getData() {
        const url = 'https://spazi.rocks/api/users/me';
        const response = await fetch(url);
        this.setState({ status: response.status });
        let data = await response.json();

        return data;
    }

    render() {
        
        if (this.state.status === undefined) {
            return (
                <div style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
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
