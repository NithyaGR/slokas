import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Navigation extends Component {
    handleClick = (e) =>{
        sessionStorage.removeItem('loggedInUser');
        alert('You are logged out successfully! Thank you for visiting us!');
    }
    render(){
        // sessionStorage.getItem('loggedInUser');  
        return(
            <div>
                <nav className="mb-2 navbar navbar-expand-md navbar-dark bg-primary justify-content-stretch">
                <div className="d-flex">
                
                <Link className="navbar-brand" to='/home'> Books </Link> 
                <Link className="navbar-brand" to='/home'> Home </Link>  
                <Link className="navbar-brand" to='/about'> About </Link>
                <Link className="navbar-brand" to='/register'>Register</Link>
                {!sessionStorage.getItem('loggedInUser') ? <Link className="navbar-brand" to='/login'> Login </Link>
                : <Link className="navbar-brand" to='/home' onClick={this.handleClick}> Logout </Link>}
                
                </div>
                </nav>
          
            </div>
        );
}
}
export default Navigation;