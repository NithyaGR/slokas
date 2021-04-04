import { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/Navigation';
import Routes from '../Routes/Routes';
//import styled from 'styled-components';
import './App.css';


class App extends Component {

  state = {
    isLoggedIn : false
}
  logout = () => {
    sessionStorage.removeItem('loggedInUser');
    console.log(sessionStorage.getItem('loggedInUser'));
    localStorage.removeItem('loggedUser');
    this.setState({isLoggedIn : false});
    alert('You are logged out successfully! Thank you for visiting us!');
  }
  login = () => {
    this.setState({isLoggedIn : true});
  }
  render(){
 
  return (

        <div>
          <NavigationBar userAuth={this.state.isLoggedIn} logout={this.logout}/>
          <Routes login = {this.login}/>
        </div>
  );
}
}
// const Wrapper = styled.div `

// .jumbotron{
//     background: linear-gradient(to right top,  #A5EAFF, #65dfc9);
//     text-align: center;
// }`;
export default App;