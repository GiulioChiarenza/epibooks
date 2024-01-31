import SingleBook from './SingleBook'
import books from '../data/book.json'
import { Container } from 'react-bootstrap'
import {Row} from 'react-bootstrap'
const BookList = (props) =>(
    <div>
        <Container>
        <Row>
 {books.map(book => (
<SingleBook book={book}/>
 ))}
   
   </Row>
   </Container>
   </div>
)
export default BookList