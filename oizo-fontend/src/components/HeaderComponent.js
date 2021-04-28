import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <a
            href="http://localhost:3000/users"
            className="navbar navbar-light clrbrand"
          >
            
              <letter style={{ color: "blue" }}>o</letter>
              <letter style={{ color: "orange" }}>i</letter>
              <letter style={{ color: "green" }}>z</letter>
              <letter style={{ color: "red" }}>o</letter>
            
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Omarito</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderComponent;
