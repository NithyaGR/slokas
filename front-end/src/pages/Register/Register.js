import { Component } from 'react';
import './Register.css';
import DataService from '../../api/DataService';
import { Form, Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import styled from 'styled-components';



class Register extends Component {

    state = {      
         user : {
             firstName: '',
             lastName: '',
             email: '',
             userPassword: ''
         },
         errors : {}
    }
    
    handleChange = (e) =>{
        //to bind the text which we entered and to store in that corresponding ids  
        this.setState({ [e.target.id]: e.target.value });
        //console.log('onChange');
    }
    handleClick=(e) => {
        e.preventDefault();
        //console.log('inside handle submit');
        if(this.validate()){
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            userPassword: this.state.userPassword
        }
        this.setState ({
                firstName: '',
                lastName: '',
                email: '',
                userPassword: ''
        })
        DataService.executeUserServicePost(newUser)
        .then(
            response => {
                //console.log('testing');
                //console.log(response.status);
                if(response.status === 200){
                    alert('Registration Successful!');
                    this.props.history.push('/login');
                }
                else {
                    alert('Registration Failed!');
                }
            }

        )
        .catch( error => {
            //console.log(error);
            alert('Connection Error - Try again');
        })
    }
    else {
        alert('Check your entered data!')
    }

    }
  validate(){
      //let input = this.state.input;
      let errors = {};
      let isValid = true;
      if (!this.state.firstName) {
        isValid = false;
        errors["firstName"] = "Please enter your first name.";
      }
      if (!this.state.lastName) {
        isValid = false;
        errors["lastName"] = "Please enter your last Address.";
      }
      if (typeof this.state.email !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.state.email)) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
      if (!this.state.userPassword) {
        isValid = false;
        errors["userPassword"] = "Please enter your password.";
      }
       this.setState({
        errors: errors
      });
      return isValid;

  }  
  
render(){
    return(
        
        <Wrapper className = 'wrapper'>
            <Jumbotron>
                <Container>            
                <br /> 
                <Form className = 'registerForm'>
                <Form.Group controlId='formBasicFirstName'>
                <Form.Control type='first Name' placeholder='Enter Your First Name' id='firstName'
                    value = {this.state.firstName} onChange={this.handleChange} />
                <div className="text-danger">{this.state.errors.firstName}</div>    
                </Form.Group>
                 <br />
                 <Form.Group controlId='formBasicLastName'>
                <Form.Control type='lastName' id='lastName' 
                placeholder='Enter Your Last Name' value = {this.state.lastName} onChange={this.handleChange}/>
                 <div className="text-danger">{this.state.errors.lastName}</div>
                 </Form.Group>
                 <br />
                 <Form.Group controlId='formBasicEmail'>
                <Form.Control type='email' id='email' 
                placeholder='Enter Your Email' value = {this.state.email} onChange={this.handleChange}/>
                 <div className="text-danger">{this.state.errors.email}</div>
                 </Form.Group>
                 <br />
                 <Form.Group controlId='formBasicPassword'>
                <Form.Control type='password'  id='userPassword' 
                placeholder='Password' value = {this.state.password} onChange={this.handleChange}/> 
                 <div className="text-danger">{this.state.errors.userPassword}</div>
                 </Form.Group>
                 <br />
                 <Button variant='primary' type='submit'  onClick={this.handleClick}>Submit</Button>   
            </Form>
               
        </Container>
        </Jumbotron>
        </Wrapper>
    )
}
}
const Wrapper = styled.div `
min-height: calc(91vh - 55px);
.registerForm {
    text-align: center;
    width: 400px;
}
.jumbotron {
    
    text-align: center;
}`;
export default Register;