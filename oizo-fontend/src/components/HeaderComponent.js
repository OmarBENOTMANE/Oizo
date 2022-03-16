import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import logoHome from '../home.ico'
import logoTrips from '../trips.ico'
import logoUsers from '../users.ico'

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand href="http://localhost:3000/">
          <Nav className="navbar navbar-light clrbrand">
            <span style={{ color: "#00BFFF", fontSize: 32 }}>o</span>
            <span style={{ color: "orange" , fontSize: 32}}>i</span>
            <span style={{ color: "#03C03C" , fontSize: 32}}>z</span>
            <span style={{ color: "red" , fontSize: 32}}>o</span>
          </Nav>
        </Navbar.Brand>
        
        <Link to="/home" className="pad">
        <img src={logoHome} alt=""/> 
        </Link>
        <Link to="/users" className="pad">
        <img src={logoUsers} alt=""/> 
        </Link>
        <Link to="/trips" className="pad">
        <img src={logoTrips} alt=""/> 
        </Link>
        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <Link to='/sign2'>Sign in </Link> / 
           <Link to='/sign1'> Register</Link> 
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderComponent;
