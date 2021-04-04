import { Component } from 'react';
import Container from "react-bootstrap/Container";
import DataService from '../../api/DataService';
import { Form, Button } from 'react-bootstrap';
//import { browserHistory } from 'history';
import { withRouter } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';



class Login extends Component {

    state = {      
         user : {
            firstName: '',
            lastName: '',
            email : '',
            userPassword : ''
         }
    }
    handleChange = (e) =>{
        //to bind the text which we entered and to store in that corresponding ids  
        this.setState({ [e.target.id]: e.target.value });
        //console.log('onChange');
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
                //console.log('testing');
                //console.log(response.data);
                this.setState({user : response.data});
                //console.log(this.state.user);
            }
        )
        .catch( error => {
            //console.log(error);
            alert('No such user matching your credentials!');
        })
        setTimeout(() => {
            //console.log(this.state.user.email);
            //console.log(this.state.user.userPassword);
            //console.log(this.props);
            if(this.state.user.email === userEmail && this.state.user.userPassword === userPassword){
                sessionStorage.setItem('loggedInUser', this.state.user.firstName);  
                //console.log('Login successful');
                this.props.login();
                alert("Login Successful");
                this.props.history.push('/');                
                }
                else {
                  alert('Wrong credentials!');
               }  
        }, 5000);
    }
    
render(){
    return(
        <Wrapper>
            <h3>Login</h3>
            <Jumbotron className='jumbotron'>
            <Container>
            <Form className='login'>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' id='inputEmail'/>
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' id='inputPassword'/>
                </Form.Group>
                <br />
                <Button variant='primary' type='submit' onClick={this.handleClick}>
                    Submit
                </Button>
            </Form>
        </Container>
        </Jumbotron>
        </Wrapper>
    )
}
}

const Wrapper = styled.div `
.login{
    // margin-left: 50%;
    // margin-top : 50%;
    margin : auto;
    text-align: center;
    width: 400px;
}
.jumbotron{
    
    text-align: center;
}`;
export default withRouter(Login);
  
