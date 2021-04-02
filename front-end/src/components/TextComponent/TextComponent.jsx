

import React, { Component } from 'react';
import './TextComponent.css';


class TextComponent extends Component {
  
    render (){
        console.log(this.props.display);
        return(
            <div className='text'>
            <br/>
            <h4>{this.props.display.slokaNo}</h4>
            <br/>
            <div className='sanskrit'>
            <br/>
            <h4><pre style={{fontSize: 20}}>{this.props.display.textSanskrit}</pre></h4>
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
        )
    }
}
export default TextComponent;