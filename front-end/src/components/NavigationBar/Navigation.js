import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navigation extends Component {
    handleClick = (e) =>{
        sessionStorage.removeItem('loggedInUser');
        console.log(sessionStorage.getItem('loggedInUser'));
        alert('You are logged out successfully! Thank you for visiting us!');
    }
    render(){
         console.log(sessionStorage.getItem('loggedInUser'));  
        return(
            <div>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/home">Sri Krishna Asram</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav.Link><NavLink to="/home">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/register">Register</NavLink></Nav.Link>
                    { sessionStorage.getItem('loggedInUser') 
                    ?  <Nav.Link><NavLink to="/home" onClick={this.handleClick}>Logout</NavLink></Nav.Link> 
                    :  <Nav.Link><NavLink to="/login">Login</NavLink></Nav.Link> }
                </Navbar.Collapse>
                </Navbar>
                {/* <nav className="mb-2 navbar navbar-expand-md navbar-dark bg-primary justify-content-stretch">
                <div className="d-flex">
                
                <Link className="navbar-brand" to='/home'> Books </Link> 
                <Link className="navbar-brand" to='/home'> Home </Link>  
                <Link className="navbar-brand" to='/about'> About </Link>
                <Link className="navbar-brand" to='/register'>Register</Link>
                {!sessionStorage.getItem('loggedInUser') ? <Link className="navbar-brand" to='/login'> Login </Link>
                : <Link className="navbar-brand" to='/home' onClick={this.handleClick}> Logout </Link>}

                </div>
                </nav>
           */}
            </div>
        );
}
}
export default Navigation;

{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav.Link>
          <NavLink to="/">Home</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/about">About</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/contact">Contact</NavLink>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar> */}