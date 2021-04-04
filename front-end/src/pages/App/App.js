import { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/Navigation';
import Routes from '../Routes/Routes';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
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
    <Wrapper>
      <Jumbotron>
        <Container>
        <div className="App">
          <NavigationBar userAuth={this.state.isLoggedIn} logout={this.logout}/>
          <Routes login = {this.login}/>
        </div>
        </Container>
    </Jumbotron>
    </Wrapper>
  );
}
}
const Wrapper = styled.div `
body{
  background: linear-gradient(to right top,  #A5EAFF, #65dfc9); 
  text-align: center;
  min-height: 100vh;
  width: 100%;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.jumbotron{
    background: linear-gradient(to right top,  #A5EAFF, #65dfc9);
    text-align: center;
}`;
export default App;