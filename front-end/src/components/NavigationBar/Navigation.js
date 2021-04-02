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
                    <NavItem><NavLink to='/home'>Home</NavLink></NavItem>
                    <NavItem><NavLink to='/about'>About</NavLink></NavItem>
                    <NavItem><NavLink to='/register'>Register</NavLink></NavItem>
                    { this.props.userAuth 
                    ?  <NavItem><NavLink to='/home' onClick={this.handleClick}>Logout</NavLink></NavItem> 
                    :  <NavItem><NavLink to='/login'>Login</NavLink></NavItem> }
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
}
}
export default Navigation;
