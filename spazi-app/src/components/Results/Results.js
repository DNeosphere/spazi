import React, { Component } from "react";
import { Link } from "react-router-dom";

import Modal from "../Modal/Modal";
import "./Results.css";
import Logo from "../../imagesSpazi/logo_blue.png";
import {getData} from "../../helpers"

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      userId: undefined,
      spaziId: this.props.spazi._id  };
  }

  componentDidMount() {
    const response = getData().then(resp => this.setState({ userId: resp.id}));
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    //console.log("Results --- State", this.state)
    return (
      <div>
        <div className="results-container">
          <div className="results-img">
            <img src={this.props.spazi.imageUrl}></img> 
           </div>
          <p className="spazi-description">
            Name: {this.props.spazi.name}<br /> Specialized: {this.props.spazi.specialization}
          </p>
          <button className="users-contact-btn" onClick={this.toggleModal} >
            Contact
          </button>
        </div>
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal} userId={this.state.userId} spaziId={this.state.spaziId}>
            Select time to reserve 
        </Modal>
      </div>
      
    );
  }
}

export default Results;
