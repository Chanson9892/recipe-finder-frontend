import React, { Component, Fragment } from 'react';
import CommentContent from './CommentContent';
import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';

const API = "http://localhost:3000"

let token = localStorage.getItem('token')

export default class CommentContainer extends Component {

  state = {
    favorite: this.props.favorite,
    comments: this.props.favorite.comments,
  }

  createComment = (fave) => {
    fetch(API + `/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        content: 'Placeholder',
        favorite_id: fave.id 
      })
    })
    .then(res => res.json())
    .then(newComment => {
      this.setState({
        comments: [...this.state.comments, newComment]
      })
    })
        
  }

  updateComments = (updatedComment) => {
    let updatedComments = this.state.comments.map( comment => comment.id === updatedComment.comment.id ? updatedComment.comment : comment)
    this.setState({
      comments: updatedComments
    })
  }

  handleDeleteClick = (comm) => {
    fetch(API + `/comments/${comm.id}`, {
    method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(() => {
      const filteredComments = [...this.state.comments].filter(
        comment => comment.id !== comm.id
      )
      this.setState({
        comments: filteredComments
      })
    })
  }

  render() {
     
    return (
      <Fragment>
        <div className='comment-container'>
          <button onClick={() => this.createComment(this.props.favorite)}>Create a Comment</button>
          <Accordion>
            <AccordionSummary  expandIcon={<ExpandMore />}>
              Comments
            </AccordionSummary>
            <AccordionDetails>
              {this.state.comments.map((comm) => (
                <CommentContent key={comm.id} comment={comm} handleDeleteClick={this.handleDeleteClick} 
                  updateComments={this.updateComments} />
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      </Fragment>
    );
  }

}