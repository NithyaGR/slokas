import { Component } from 'react';
import Container from "react-bootstrap/Container";
import './Login.css';
import DataService from '../../api/DataService';
import { Form, Button } from 'react-bootstrap';



class Login extends Component {

    state = {      
         user : {
            firstName: '',
            lastName: '',
            email : '',
            userPassword : ''
         }
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
        <Container className="w-100 p-3">
        <div>
            <h3>Login</h3>
            <div className='login'>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" size='sm' placeholder="Enter email" id='inputEmail'/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" size='sm' placeholder="Password" id='inputPassword'/>
                </Form.Group>
                <br />
                <Button variant="primary" type="submit" onClick={this.handleClick}>
                    Submit
                </Button>
                </Form>
                </div>
        </div>
        </Container>
  
    
    )
}
}
export default Login;
  
/*
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
*/
/*
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
                placeholder='Password'  onChange={this.handleChange}/>
                 </div>
                 <br />
                 <button type='submit' className='btn btn-primary' onClick={this.handleClick}>Submit</button>   
            </form>
            </div>   
*/