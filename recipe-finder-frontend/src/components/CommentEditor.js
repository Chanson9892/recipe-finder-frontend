import React, { Component } from 'react';

const API = "http://localhost:3000"

let token = localStorage.getItem('token')

export default class Comment extends Component {
  constructor(props){
    super(props)
    this.state={
      comment: this.props.comment
    }
  }

  editContent = (e) => {
    let changes = e.target.value
    this.setState(prevState => ({
      comment: {
        ...prevState.comment,
        content: changes
      }
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    return fetch(API + `/comments/${this.state.comment.id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state.comment)
    })
    .then(res => res.json())
    .then(updatedComment => {
      this.props.updateComments(updatedComment)
      this.props.handleCancelClick()
    })
    .catch(console.log)
  }
    
  render() {
    return (
      <form className="comment-editor" onSubmit={(e) => this.handleSubmit(e)}>
        <textarea name="body" defaultValue={this.state.comment.content} onChange={(e) => this.editContent(e)} />
        <div className="button-row">
          <input className="button" type="submit" value="Save"/>
          <button type="button" onClick={() => this.props.handleCancelClick()}>Cancel</button>
        </div>
      </form>
    );
  }

}