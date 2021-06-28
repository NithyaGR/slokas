import { Component }from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import DataService from "../../api/DataService";
import styled from 'styled-components';


class Home extends Component {
    state = {       
        books : []
    }
    
    bookClicked = (book) => {
        let bookRoute;
        console.log('book clicked '+book);
        
        if(book === 'Sri Bhagavad Gita'){
            bookRoute = 'bg';
            //Storing the selected book under the name selectedBook
            sessionStorage.setItem('selectedBook', bookRoute);
            console.log(`/book/${bookRoute}`);
            this.props.history.push(`/book/${bookRoute}`);
        }
        
    }
    componentDidMount(){
        console.log('componentDidMount - get all books - home');
        DataService.executeHomeService()
        .then(
            response => {
                console.log(response.data);
                this.setState({books : response.data})
            }
        )
    }
    render(){
        let count = 1;
        return(
            <Wrapper>
            <Jumbotron>
            <Container>
            <div>
                <h3>Books!</h3>
                <table className='table'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>Name</th>
                <th scope='col'>Author</th>
              </tr>
            </thead>
            <tbody>
                {this.state.books.map(book => (
                    <tr key = {count++}> 
                        <td>{count} </td>
                        <td onClick = {() => this.bookClicked(book.bookTitle)}><a href="#">{book.bookTitle}</a></td>
                        <td>{book.bookAuthor}</td>
                    </tr>
                ))}
            </tbody>
            </table>
            </div>
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
}
.jumbotron{
    text-align: center;
}`;

export default Home;