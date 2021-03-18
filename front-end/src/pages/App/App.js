import { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/Navigation';
import Routes from '../Routes/Routes';
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
    <div className="App">
      <NavigationBar userAuth={this.state.isLoggedIn} logout={this.logout}/>
      <Routes login = {this.login}/>
    </div>
  );
}
}

export default App;
/*
componentDidMount(){
        console.log('inside component will mount of navigation.js');
        if(sessionStorage.getItem('loggedInUser') !== null ){
            this.setState({isLoggedIn: true}); 
        } 
        else{
            this.setState({isLoggedIn: false}); 
        }
    }
*/

