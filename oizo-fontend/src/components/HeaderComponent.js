import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand href="http://localhost:3000/">
          <Nav
            className="navbar navbar-light clrbrand">
              <span style={{ color: "#00BFFF" }}>o</span>
              <span style={{ color: "orange" }}>i</span>
              <span style={{ color: "#03C03C" }}>z</span>
              <span style={{ color: "red" }}>o</span>
          </Nav>
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
