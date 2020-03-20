import React, { Component } from "react";
import { Link } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import "./Modal.css"
import { postData } from "../../helpers"
const moment = require('moment');

const MySwal = withReactContent(Swal);
class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dateStart: new Date(),
      dateEnd: new Date()
    }
    this.handlePost = this.handlePost.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  onChange = date => this.setState({ date })

  handlePost(e) {

    const url = 'https://spazi.rocks/api/users/contact-spazi';
    const data = {
      spaziId: this.props.spaziId,
      dateStart: this.state.dateStart.toISOString(),
      dateEnd: this.state.dateEnd.toISOString(),
    };
    e.preventDefault();

    try {
      postData(url, data).then(resp => {
        if (resp.status === "OK") {
          MySwal.fire({
            icon: 'success',
            title: 'The contact has been created',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    } catch (err) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
      console.log(err.message)
    }
  }



  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="modal">
          {this.props.children}
          <div className="container--dates">
            <label for="dateStart">Date Start</label>
            <DateTimePicker className="modal--date"id="dateStart" onChange={this.onChange}
              value={this.state.dateStart} required />
            <label for="dateEnd">Date end</label>
            <DateTimePicker className="modal--date" id="dateEnd" onChange={this.onChange}
              value={this.state.dateEnd} required />
          </div>
          <div className="footer">
            <button className="modal-btn" onClick={this.handlePost}>
              Match!
              </button>
            <button className="modal-btn" onClick={this.props.onClose}>
              Close
              </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;