

import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DataService from '../../../api/DataService';
import TextComponent from '../../../components/TextComponent/TextComponent';
import './Chapter.css';

class Chapter extends Component {
    state = {
        texts : [],
        displayText : 1
    }
    componentDidMount(){
        console.log('componentDidMount - to get all the verses in the selected chapter');
        let bookNo = sessionStorage.getItem('selectedBook');
        let chapterNo = sessionStorage.getItem('selectedChapterNo');
        DataService.executeBookServiceTexts(bookNo, chapterNo)
          .then(
              response => {
                  console.log(response.data);
                  this.setState({texts : response.data});
              }
          )       
    }
    handleClick = (e) => {
        console.log(e.target.id);
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
                previousNo = 20;
            }
            this.setState(
                {
                displayText: previousNo
            });
        }
    }
    render() {

        return(
            <div className='texts'>
            <h4>{sessionStorage.getItem('selectedChapterNo')} : {sessionStorage.getItem('selectedChapterName')}</h4>
                <div className='main'>                   
                <div className='dynamicButtons'>  
                <button type='button' className='btn btn-info' id='previous' onClick={this.handleClick}>&laquo; Previous</button>
                    <span className='badge badge-info' id='textNo'>{this.state.displayText}</span>
                <button type='button' className='btn btn-info' id='next' onClick={this.handleClick}>&raquo; Next</button>        
                </div>    
                <div className='glass'>
                    {this.state.texts.map((textData) => (
                        textData.slokaNo === this.state.displayText
                        ? <TextComponent display={textData} key={textData.slokaNo}/>
                    : '')
                    )}
                    
                </div>
                </div>
                <div className="circle1"> </div>
                <div className="circle2"> </div>                        
            </div>
        )
    }
}
export default withRouter(Chapter);
