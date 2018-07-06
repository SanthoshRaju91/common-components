import React, { Component } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import ShowCase from "./showcase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }
  openModal = () => {
    this.setState({
      openModal: true
    });
  };

  onPrimaryActionClick = () => {
    console.log("positve click");
    this.setState({
      openModal: false
    });
  };

  onSecondaryActionClick = () => {
    console.log("negative click");
    this.setState({
      openModal: false
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Components</h1>
        </header>

        {/* <div className="container">
          <div className="tags">
            <Button type="primary" size="tiny" onClick={this.openModal}>
              Open Modal
            </Button>
            <Modal
              modalContent="Modal Content"
              headerName="Modal Header"
              primaryText="Yes"
              secondaryText="No"
              onPrimaryActionClick={this.onPrimaryActionClick}
              onSecondaryActionClick={this.onSecondaryActionClick}
              theme={{button: {type: 'primary'}, container:'modalconatiner', size:'medium', isModalShown: this.state.openModal }}/>
          </div>
        </div> */}
        <ShowCase />
      </div>
    );
  }
}

export default App;
