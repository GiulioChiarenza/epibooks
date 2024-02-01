import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class AddComments extends Component{
    render(){
        return(
            <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h2 className="text-center">Area commenti</h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>il tuo commento</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="lascia un commento!"
                  required
                  value={this.state.comments.comment}
                 
                  onChange={(e) => {
                  
                    this.setState({
                      comments: {
                        ...this.state.comments, 
                        comment: e.target.value, 
                      },
                    })
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Il tuo voto</Form.Label>
                <Form.Control
                  type="rate"
                  required
                  value={this.state.comments.rate}
                  onChange={(e) => {
                    this.setState({
                      comments: {
                        ...this.state.comments,
                        rate: e.target.value,
                      },
                    })
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>id</Form.Label>
                <Form.Control
                  type="id"
                  required
                  value={this.state.comments.elementId}
                  onChange={(e) => {
                    this.setState({
                      comments: {
                        ...this.state.comments,
                        elementId: e.target.value,
                      },
                    })
                  }}
                />
              </Form.Group>

              <Button
                type="submit"
                variant="primary"
                disabled={
                  this.state.comments.comment === '' ||
                  this.state.comments.rate === ''
                 
                }
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        )
    }
}
export default AddComments