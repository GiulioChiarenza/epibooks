import { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import books from '../data/book.json'

class AllTheBooks extends Component  {
render() {
    return(

    <Container>
      <h2>Tutti i Libri</h2>
      <Row>
        {books.map(book => (
          <Col key={book.asin} sm={6} md={4} lg={3}>
            <Card style={{ margin: '10px' }}>
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
)}}
export default AllTheBooks