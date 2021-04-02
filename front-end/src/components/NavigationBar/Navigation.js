import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { NavItem } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navigation extends Component {
   
    handleClick = (e) =>{
        this.props.logout();
    }
    render(){
         console.log(sessionStorage.getItem('loggedInUser'));  
        return(
            <div>
                <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' >
                <Navbar.Brand href='/home'>Sri Krishna Asram</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav.Link><NavLink to='/home' className="navlinks" style={{ textDecoration: 'none', color: 'white' }}>Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/about' className="navlinks" style={{ textDecoration: 'none', color: 'white' }}>About</NavLink></Nav.Link>
                    <Nav.Link><NavLink to='/register' className="navlinks" style={{ textDecoration: 'none', color: 'white' }}>Register</NavLink></Nav.Link>
                    { this.props.userAuth 
                    ?  <Nav.Link><NavLink to='/home' onClick={this.handleClick} className="navlinks"style={{ textDecoration: 'none', color: 'white' }}>Logout</NavLink></Nav.Link> 
                    :  <Nav.Link><NavLink to='/login' className="navlinks" style={{ textDecoration: 'none', color: 'white' }}>Login</NavLink></Nav.Link> }
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
}
}
export default Navigation;
