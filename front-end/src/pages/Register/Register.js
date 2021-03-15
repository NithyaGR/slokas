import { Component } from 'react';
import './Register.css';
import DataService from '../../api/DataService';
import { Form, Button } from 'react-bootstrap';



class Register extends Component {

    state = {      
         user : {
             firstName: '',
             lastName: '',
             email: '',
             userPassword: ''
         }
    }
    
    handleChange = (e) =>{
        //to bind the text which we entered and to store in that corresponding ids  
        this.setState({ [e.target.id]: e.target.value });
        console.log('onChange');
    }
    handleClick=(e) => {
        e.preventDefault();
        console.log('inside handle submit');
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
                console.log('testing');
                console.log(response.status);
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
            console.log(error);
            alert('Connection Error - Try again');
        })

    }
    
  
render(){
    return(
        <div className='register'>
            <div className='registerForm'>
                <br />
                <Form>
                <Form.Group controlId='formBasicFirstName'>
                <Form.Control type='first Name' placeholder='Enter Your First Name' id='firstName'
                    value = {this.state.firstName} onChange={this.handleChange} />
                     </Form.Group>
                 <br />
                 <div className='form-group'>
                <input type='lastName' className='form-control' id='lastName' 
                placeholder='Enter Your Last Name' value = {this.state.lastName} onChange={this.handleChange}/>
                 </div>
                 <br />
                 <div className='form-group'>
                <input type='email' className='form-control' id='email' 
                placeholder='Enter Your Email' value = {this.state.email} onChange={this.handleChange}/>
                 </div>
                 <br />
                 <div className='form-group'>
                <input type='password' className='form-control' id='userPassword' 
                placeholder='Password' value = {this.state.password} onChange={this.handleChange}/>
                 <br />
                 </div>
                 <button type='submit' className='btn btn-primary' onClick={this.handleClick}>Submit</button>   
            </Form>
            </div>   
            <div className='bg_image'>
            </div>
        </div>
        
  
    
    )
}
}
export default Register;
/*
<form>
                <div className='form-group'>
                     <input type='first Name' className='form-control' id='firstName' 
                      placeholder='Enter Your First Name' value = {this.state.firstName} onChange={this.handleChange}/>
                 </div>
                 <br />
                 <div className='form-group'>
                <input type='lastName' className='form-control' id='lastName' 
                placeholder='Enter Your Last Name' value = {this.state.lastName} onChange={this.handleChange}/>
                 </div>
                 <br />
                 <div className='form-group'>
                <input type='email' className='form-control' id='email' 
                placeholder='Enter Your Email' value = {this.state.email} onChange={this.handleChange}/>
                 </div>
                 <br />
                 <div className='form-group'>
                <input type='password' className='form-control' id='userPassword' 
                placeholder='Password' value = {this.state.password} onChange={this.handleChange}/>
                 <br />
                 </div>
                 <button type='submit' className='btn btn-primary' onClick={this.handleClick}>Submit</button>   
            </form>
*/
  
