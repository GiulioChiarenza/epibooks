import { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Alert from 'react-bootstrap/Alert'
import { Button, Spinner } from 'react-bootstrap'

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  fetchComments = () => {
   
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWY4OTViMjYxNTAwMTk4YTY5NzUiLCJpYXQiOjE3MDY3OTg5ODUsImV4cCI6MTcwODAwODU4NX0.3WlcqzbFsHKJFqF3KKRY7XJLgzWXbHaT7-RL8-HBuN0"
}
})
      .then((response) => {
        if (response.ok) {
         
          return response.json()
        } else {
          throw new Error('Errore nella ricezione dati dal server')
        }
      })
      .then((arrayOfComments) => {
       
        this.setState({
          reservations: arrayOfComments,
          isLoading: false,
        })
      })
      .catch((err) => {
        console.log(err)
        this.setState({
          isLoading: false,
          isError: true,
        })
      })
  }

 
  componentDidMount() {

    console.log('sono componentDidMount!')
    
    this.fetchComments()
  }

  deleteComments = (commentId) => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/reservation/' + commentId,
      {
        method: 'DELETE',
      }
    )
      .then((response) => {
        if (response.ok) {
         
          alert('eliminato con successo')
         
          this.fetchComments()
        } else {
          alert("problema nell'eliminazione")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    console.log(
      'sono render! valore di this.state.comments:',
      this.state.comments
    )
 
    return (
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <h2>Tutti i commenti</h2>
           
            {this.state.isLoading && (
              <Spinner animation="border" variant="success"></Spinner>
            )}
           
            {this.state.comments.length === 0 &&
            !this.state.isLoading &&
            !this.state.isError ? (
              <Alert variant="warning">Nessuna commento</Alert>
            ) : (
              <ListGroup>
                {this.state.comments.map((comment) => {
                  return (
                    <ListGroup.Item
                      key={comment._id}
                      className="d-flex align-items-center justify-content-between"
                    >
                      <span>
                        {comment.comment}  {comment.rate}
                      </span>
                      <Button
                        variant="danger"
                        onClick={() => {
                          this.deleteComments(comment._id)
                        }}
                      >
                        <i className="bi bi-trash-fill"></i>
                      </Button>
                    </ListGroup.Item>
                  )
                })}
              </ListGroup>
            )}
            {this.state.isError && (
              <Alert variant="danger">Si è verificato un problema</Alert>
            )}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CommentList