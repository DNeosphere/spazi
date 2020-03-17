import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



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
        return data;
    }

    render() {
        const { user } = this.state;
        if (user === undefined) {
            return (
                <div>
                    Loading...
                </div>
            );
        }

        if (this.state.status === 401) {
            this.props.history.push('/login');
        }


        return this.props.children;
    }


}

export default withRouter(AuthComponent);