import { Component }from 'react';
import DataService from "../../api/DataService";


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
            <div>
                <h3>Display books here</h3>
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
                        <td onClick = {() => this.bookClicked(book.bookTitle)}>{book.bookTitle}</td>
                        <td>{book.bookAuthor}</td>
                    </tr>
                ))}
            </tbody>
            </table>
            </div>
        )
    }
}
export default Home;