import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navigation extends Component {
    handleClick = (e) =>{
        sessionStorage.removeItem('loggedInUser');
        console.log(sessionStorage.getItem('loggedInUser'));
        localStorage.removeItem('loggedUser');
        alert('You are logged out successfully! Thank you for visiting us!');
    }
    render(){
         console.log(sessionStorage.getItem('loggedInUser'));  
         console.log(localStorage.getItem('loggedUser'));
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/home">Sri Krishna Asram</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav.Link><NavLink to="/home">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/register">Register</NavLink></Nav.Link>
                    { localStorage.getItem('loggedUser') 
                    ?  <Nav.Link><NavLink to="/home" onClick={this.handleClick}>Logout</NavLink></Nav.Link> 
                    :  <Nav.Link><NavLink to="/login">Login</NavLink></Nav.Link> }
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
}
}
export default Navigation;
