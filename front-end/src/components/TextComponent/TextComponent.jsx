

import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

class TextComponent extends Component {
  
    render (){
         console.log(this.props.display.translation);
        return(
            <Wrapper>
               <Jumbotron>
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
                    <pre>{this.props.display.textEnglish}</pre>
                    {/* <h4>{this.props.display.textEnglish}</h4> */}
                    </div>
                    <div className='translation'>
                    <br/>
                    <h5> Meaning </h5>   
                    <br/>
                    <h5 className='translation'>{this.props.display.translation}</h5>
                    </div>
                    </div>
                    </Container>
                    </Jumbotron>
            </Wrapper>
        )
    }
}
const Wrapper = styled.div `
min-height: calc(91vh - 55px);
.sanskrit {
    font-size: 20px;
}
.english {
    font-size: 16px;
}
h4, h5 {
    text-align : center;
}
@media only screen and (max-width: 480px) {
    .jumbotron {
        margin-left : 5px;
        margin-right : 5px;
    }
    pre {
        font-size: 12px;
    }
   
    .translation {
        font-size: 12px;
    }
  }
// .jumbotron {
//     width: 100%; 
    
// }
`;
export default TextComponent;
