import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { LogoWhite } from "../components/";

import '../styles/forms.css';
import "./../styles/base.css";
import "./../styles/flexbox.css";

const MySwal = withReactContent(Swal);
class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            confirm: '',
            hasAgreed: false,
            redirect: false
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

        if (this.state.confirm !== this.state.password){
          MySwal.fire({
            icon: 'error',
            title: "Password doesn't match"
          })
          this.setState( {password: '', confirm: ''} );
          } else {
          if (emailPattern.test(this.state.email)){
              const url = 'https://spazi.rocks/api/users';
              const  data = {
                  email: this.state.email,
                  password: this.state.password,
                  name: this.state.name
              };

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

                  return await response.json().catch(err => console.log(err.meessage)) // parses JSON response into native JavaScript objects
              }
              try{
                  postData(url, data).then( resp => {
                    if (resp.status === "OK"){
                      MySwal.fire({
                        icon: 'success',
                        title: 'The user has been created',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    this.setState({ redirect: true});
                    }
                  })
                  console.log('The form was submitted with the following data:');
                  console.log(this.state);

              } catch (err){
                MySwal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!'
                })
                  console.log(err.message)
              }
          } else {
            MySwal.fire({
              title: 'Hi, dude!',
              text: 'Invalid email, check it again :)'
            })
          }

        }


    }

    render() {
      if (this.state.redirect === true) {
        return <Redirect to="/signin" />
    }
        return (
            <div className='form-container'>
            <LogoWhite />
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="PageSwitcher">
                <Link to="/signupspazi" className="PageSwitcher__Item">Spazi</Link>
                <Link to="/signup" className="PageSwitcher__Item PageSwitcher__Item--Active">User</Link>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} required="required" />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} required="required"/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="confirm" className="FormField__Input" placeholder="Confirm your password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required="required" />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} required="required"/>
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} required="required"/> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
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
