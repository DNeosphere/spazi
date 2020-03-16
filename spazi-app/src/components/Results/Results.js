import React, { Component } from "react";
import { Link } from "react-router-dom";

import Modal from "../Modal/Modal";
import "./Results.css";
import Logo from "../../imagesSpazi/logo_blue.png";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <div className="results-container">
          <div className="results-img"> </div>
          <p className="spazi-description">
            Name: <br /> Specialized:{" "}
          </p>
          <button className="users-contact-btn" onClick={this.toggleModal} >
            Contact
          </button>
        </div>
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
            INHALT FUERS MODAL HIER EINGEBEN
        </Modal>
      </div>
      
    );
  }
}

export default Results;
