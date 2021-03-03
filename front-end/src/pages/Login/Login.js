import { Component } from 'react';
import './Login.css';
import DataService from '../../api/DataService';


class Login extends Component {

    state = {      
         users : []
    }
    // componentDidMount(){
    //     console.log('componentDidMount - to get all the verses in the selected chapter');
    //     DataService.executeUserServiceGetAll()
    //       .then(
    //           response => {
    //               console.log(response.data);
    //               this.setState({users : response.data});
    //           }
    //       ).catch( error => {
    //         console.log(error);
    //     })     
    // }
    handleChange = (e) =>{
        //to bind the text which we entered and to store in that corresponding ids  
        this.setState({ [e.target.id]: e.target.value });
        console.log('onChange');
    }
    handleClick=(e) => {
        e.preventDefault();
        console.log('inside handle submit');
        let userEmail = document.getElementById('inputEmail').value;
        let userPassword = document.getElementById('inputPassword').value;
        // console.log(userEmail);
        // console.log(userPassword);
        DataService.executeUserServiceGetUser(userEmail)
        .then(
            response => {
                console.log('testing');
                console.log(response.data);
                this.setState({user : response.data});
                console.log(this.state.user);
            }

        )
        .catch( error => {
            console.log(error);
            alert('No such user matching your credentials!');
        })
        setTimeout(() => {
            console.log(this.state.user.email);
            console.log(this.state.user.userPassword);
            if(this.state.user.email === userEmail && this.state.user.userPassword === userPassword){
                sessionStorage.setItem('loggedInUser', this.state.user.firstName);  
                console.log('Login successful');
                alert("Login Successful");
                this.props.history.push('/home');
                  
                }
                else {
                  alert('Wrong credentials!');
               }  
        }, 5000);

    }
    
  
render(){
    return(

        <div>
            <h3>Login</h3>
            <div className='loginForm'>
                <br />
            <form>
                <div className='form-group'>
                     <input type='email' className='form-control' id='inputEmail' 
                      placeholder='Provide email' onChange={this.handleChange}/>
                 </div>
                 <br />
                 <div className='form-group'>
                <input type='password' className='form-control' id='inputPassword' 
                placeholder='Password' onChange={this.handleChange}/>
                 </div>
                 <br />
                 <button type='submit' className='btn btn-primary' onClick={this.handleClick}>Submit</button>   
            </form>
            </div>   
        </div>
        
  
    
    )
}
}
export default Login;
  
