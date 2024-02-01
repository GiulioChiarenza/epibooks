import { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import CommentList from "./CommentList";
import AddComments from "./AddComments";


class CommentArea extends Component {

state= {
comments: {
    comment: '',
    rate: '',
    elementId: ''
}

}
handleChange = (e, key) => {
    this.setState({
      comments: {
        ...this.state.comments,
        [key]: e.target.value,
      },
    })
  }
fetchComment= ()=>{
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method:'POST',
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWY4OTViMjYxNTAwMTk4YTY5NzUiLCJpYXQiOjE3MDY3OTg5ODUsImV4cCI6MTcwODAwODU4NX0.3WlcqzbFsHKJFqF3KKRY7XJLgzWXbHaT7-RL8-HBuN0"
}
})
.then ((response)=>{
    if (response.ok){
        return response.json()
    }else{throw new Error('errore nella ricezione del server')}
})
.catch ((err)=>{
    console.log(err)
})
}
render(){
    console.log('render valore di' this.state.comments)
    return (
        <Container>
            <AddComments></AddComments>
<CommentList></CommentList>

        </Container>
    )
}




}
export default CommentArea