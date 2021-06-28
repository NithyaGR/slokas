import DataService from "../../../api/DataService";
//import { Link, matchPath } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap-table';
import styled from 'styled-components';


const { Component } = require("react");


class SBG extends Component {
    state = {
        chapters :[]
    }
    chapterClicked = (count, name) => {
        console.log('clicked chapter no is '+count);
        //Storing the selected chapter under the name selectedChapterNo
        sessionStorage.setItem('selectedChapterNo', count);
        sessionStorage.setItem('selectedChapterName', name);
        //console.log(`/book/bg/chapter/${count}`);
        if(count === 12 || count === 15 || count === 1 || count === 2){
            this.props.history.push('/chapter');
        }
        // this.props.history.push(`/book/bg/chapter/${count}`);
        //this.props.history.push('/book/bg/chapter/count');
    }
    componentDidMount(){
        console.log('Component did mount to get all chapters of SBG');
        DataService.executeBookService(1)
        .then(
            response => {
                console.log(response.data);
                this.setState({chapters : response.data});
            }
        )
    }
    render() {
        return(
            <Wrapper>
                <Jumbotron>
                    <Container>
            
                <h3> Sri Bhagavad Gita</h3> 
                        <Table className='table'>
                        <thead className='thead-dark'>
                            <tr>
                                <th scope='col'>No</th>
                                <th scope='col'>Name</th>
                                {/* <th scope='col'>YouTube Link</th> */}
                            </tr>
                        </thead>
                        <tbody> 
                            {this.state.chapters.map(chapter => (
                                <tr key = {chapter.chapterNo}> 
                                    <td>{chapter.chapterNo} </td>
                                    <td onClick= {() => this.chapterClicked(chapter.chapterNo, chapter.chapterNameSanskrit)}>{chapter.chapterNameSanskrit}</td>
                                    {/* <td onClick = {() => this.chapterClicked(chapter.chapterNo)}>{chapter.chapterNameSanskrit}</td> */}
                                    {/* <td>{book.bookAuthor}</td> */}
                                </tr>
                            ))}
                        </tbody>
                        </Table>

            
            </Container>
            </Jumbotron>
            </Wrapper>
        )
    }
}
const Wrapper = styled.div `
a {
    text-decoration: none;
    cursor: pointer;
    color: black;
}
.jumbotron {
    text-align: center;
}`;
export default SBG;
//chapter/{chapter.chapterNo}
//{{pathname:'chapter/{chapter.chapterNo',state:{chapter:chapter.chapterNo}}}