import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/forms.css";
import "./../styles/base.css";
import "./../styles/flexbox.css";

import { Footer, Header } from "../components/";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let data = {email: this.state.email, password: this.state.password}
    const url = 'https://spazi.rocks/api/login'

    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      if (response.status === 200) {
          console.log(response.status)
      } else {
        alert('Not a valid email or password')
      }
      return await response.json().catch(err => console.log(err.meessage))
    }
    try {
      const resp = postData(url, data)
    } catch (error) {
      alert('Something went wrong')
                console.log(error.message)
    }

  }

  render() {
    return (
      <div className="form-container">
        <form
          onSubmit={this.handleSubmit}
          className="FormFields"
          onSubmit={this.handleSubmit}
        >
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>{" "}
            <Link to="/signup" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
