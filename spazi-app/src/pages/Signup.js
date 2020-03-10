import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/forms.css';
import "./../styles/base.css";
import "./../styles/flexbox.css";
class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        event.preventDefault();

        if (this.state.email === '') {
            alert('Please enter an Email')
        } else if (emailPattern.test(this.state.email)){
            const url = 'https://spazi.rocks/api/users'
            let data = {
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            }

            async function postData(url = '', data = {}) {
                // Default options are marked with *
                const response = await fetch(url, {
                  method: 'POST', // *GET, POST, PUT, DELETE, etc.
                  //mode: 'no-cors',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                  body: JSON.stringify(data) // body data type must match "Content-Type" header
                });
                if (response.status === 200) {
                    alert('User created succesfully')
                }
                return await response.json().catch(err => console.log(err.meessage)) // parses JSON response into native JavaScript objects
            }
            try{
                const resp = postData(url, data)

            } catch (err){
                alert('Something went wrong')
                console.log(err.message)
            }
        } else {
            alert('Invalid email, check again :)')
        }
        //this.setState( {email: ''} )

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
            <div className='form-container'>
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/signin" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUp;