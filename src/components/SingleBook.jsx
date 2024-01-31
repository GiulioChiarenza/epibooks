import { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import books from '../data/book.json'

class SingleBook extends Component {
state = {
    selected: false
}
Selected = ()=> {
    this.setState((state)=>({
        selected: !state.selected
    }))
}
render(){ 
   const {selected} = this.state;
   const borderColor = selected ? 'red': 'black';

    return (   
            <>
          <Col key={this.props.book.asin} sm={6} md={4} lg={3}>
      <h2>vari libri</h2>
            <Card style={{ margin: '10px', border: '1px solid ${borderColor}' }} onClick={this.Selected}>
              <Card.Img variant="top" src={this.props.book.img} alt={this.props.book.title} />
              <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>
                <Card.Text>{this.props.book.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </>
    );
}
}
export default SingleBook 