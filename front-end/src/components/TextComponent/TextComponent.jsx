

import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

class TextComponent extends Component {
  
    render (){
        // console.log(this.props.display);
        return(
            <Wrapper>
               <Jumbotron className='jumbotron'>
                    <Container>
               
                    <div className='text'>
                    <br/>
                    <h4>{this.props.display.slokaNo}</h4>
                    <br/>
                    <div className='sanskrit'>
                    <br/>
                    <h4><pre>{this.props.display.textSanskrit}</pre></h4>
                    </div>
                    <br/>
                    <div className='english'>
                        {/* for inline styles - 2 curly braces */}
                    <pre style={{fontSize: 16}}>{this.props.display.textEnglish}</pre>
                    {/* <h4>{this.props.display.textEnglish}</h4> */}
                    </div>
                    <div className='translation'>
                    <br/>
                    <h5> Meaning </h5>   
                    <br/>
                    <h5>{this.props.display.translation}</h5>
                    </div>
                    </div>
                    </Container>
                    </Jumbotron>
            </Wrapper>
        )
    }
}
const Wrapper = styled.div `
.sanskrit {
    font-size: 20px;
}
h4, h5 {
    text-align : center;
}
.jumbotron {
    background-color : white;
    max-width: 100%;
    overflow-x: hidden;
    
}`;
export default TextComponent;
