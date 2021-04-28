

import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DataService from '../../../api/DataService';
import TextComponent from '../../../components/TextComponent/TextComponent';
import { Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import './Chapter.css';

class Chapter extends Component {
    state = {
        texts : [],
        displayText : 1
    }
    componentDidMount(){
        //console.log('componentDidMount - to get all the verses in the selected chapter');
        let bookNo = sessionStorage.getItem('selectedBook');
        let chapterNo = sessionStorage.getItem('selectedChapterNo');
        DataService.executeBookServiceTexts(bookNo, chapterNo)
          .then(
              response => {
                  //console.log(response.data);
                  this.setState({texts : response.data});
              }
          )       
    }
    handleChange = (e) =>{
        //to bind the text which we entered and to store in that corresponding ids  
        this.setState({ [e.target.id]: e.target.value });
        console.log('onChange');
    }
    change = eventKey =>{
        alert(`You have selected ${eventKey}`);
    }
    handleClick = (e) => {
        //console.log(e.target.id);
        if(e.target.id === 'next'){
            let nextNo = Number(this.state.displayText);
            nextNo ++;
            if(nextNo > this.state.texts.length){
                nextNo = 1;
            }
            this.setState(
                {
                displayText: nextNo
            });
        }
        if(e.target.id === 'previous'){
            let previousNo = Number(this.state.displayText);
            previousNo --;
            if(previousNo < 1){
                previousNo = this.state.texts.length;
            }
            this.setState(
                {
                displayText: previousNo
            });
        }
        if(e.target.id === 'displayText'){
            console.log('Inside text box');
            console.log(e.target.value);
            let textNo = Number(e.target.value);
            console.log(textNo);
            if(textNo < 1){
                alert("Please enter a valid text number");
            }
            if(textNo > this.state.texts.length){
                alert(`There are only {this.state.texts.length} verses in this chapter`);
            }
            this.setState(
                {
                displayText: textNo
            });
        }
    }
    render() {

        return(
            <Wrapper>
            <div className='texts'>
            <br />
            <h4>{sessionStorage.getItem('selectedChapterNo')} : {sessionStorage.getItem('selectedChapterName')}</h4>
                <div className='main'>                   
                <div className='dynamicButtons'>  
                <Button variant='primary' type='button' id='previous' onClick={this.handleClick}>
                &laquo; Previous
                </Button>
                <span className='badge badge-info' id='textNo'>{this.state.displayText}</span>
                <Button variant='primary' type='button' id='next' onClick={this.handleClick}>
                &raquo; Next
                </Button>       
                </div> 
                <Form onSubmit={this.handleClick}>
                <Form.Group>
                <Form.Control type='text' placeholder='Enter verse number' id='displayText'
                    value = {this.state.displayText} onChange={this.handleChange} />   
                </Form.Group>
                </Form>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button" onSelect={this.change}>
                    {this.state.texts.map((textData) => (
                       <Dropdown.Item eventKey={textData.slokaNo}>{textData.slokaNo}</Dropdown.Item> 
                    ))}
                </DropdownButton>    
                <Jumbotron className='verses'>  
                    <Container className='glass'>
                    {this.state.texts.map((textData) => (
                        textData.slokaNo === this.state.displayText
                        ? <TextComponent display={textData} key={textData.slokaNo}/>
                    : '')
                    )}
                    </Container>
                </Jumbotron> 
                </div>
            </div>
            </Wrapper>
        )
    }
}
const Wrapper = styled.div `
    min-height: calc(91vh - 55px);
    .jumbotron {
        text-align: center; 
}`;
export default withRouter(Chapter);

