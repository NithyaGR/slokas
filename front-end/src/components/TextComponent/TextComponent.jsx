

import React, { Component } from 'react';
import './TextComponent.css';


class TextComponent extends Component {
  
    render (){
        console.log(this.props.display);
        return(
            <div className='text'>
            <h4>{this.props.display.slokaNo}</h4>
            <div className='sanskrit'>
            <h4><pre>{this.props.display.textSanskrit}</pre></h4>
            </div>
            <div className='english'>
            <pre>{this.props.display.textEnglish}</pre>
            {/* <h4>{this.props.display.textEnglish}</h4> */}
            </div>
            <div className='translation'>
             <h5> Meaning </h5>   
            <h6>{this.props.display.translation}</h6>
            </div>
            </div>
        )
    }
}
export default TextComponent;