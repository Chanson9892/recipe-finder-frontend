import React, { Component } from 'react';

export default class Comment extends Component {
    
  editBody = (e) => {
    let changes = e.target.value
      this.setState(prevState => ({
        comment: {
          ...prevState.comment,
          body: changes
        }
      }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    return fetch(API + `comments/${this.props.selectedComment.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state.comment)
    })
    .then(res => res.json())
    .then(updatedComment => {
      this.props.updateComments(updatedComment)
    })
  }
    
}