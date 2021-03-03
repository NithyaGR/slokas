import { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/Navigation';
import Routes from '../Routes/Routes';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <NavigationBar />
      <Routes />
    </div>
  );
}
}

export default App;
