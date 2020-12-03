import React, { Component, Fragment } from 'react';
import CommentCard from '../components/CommentCard';


const API = "http://localhost:3000"

let token = localStorage.getItem('token')

export default class CommentContainer extends Component {

    state = {
        favorite: this.props.favorite,
        selectedComment: {},
        editClicked: false,
        comments: this.props.favorite.comments
    }

    handleEditClick = () => {
        this.setState({
          editClicked: true
        })
    }

    handleCancelClick = () => {
        this.setState({
          editClicked: false
        })
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

    // updateComments = (updatedComment) => {
    //     let updatedComments = this.state.comments.map( comment => comment.id === updatedComment.id ? updatedComment : comment)
    //     this.setState({
    //       comments: updatedComments,
    //       editClicked: false,
    //       //makes it go back to direction screen
    //       selectedComment: {}
    //     })
    // }

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
              comments: filteredComments,
              editClicked: false,
              // makes it go back to directions screen
              selectedComment: {}
            })
        })
    }

    render() {
        // console.log(this.props.favorite)
        return (
          <Fragment>
            <div className='comment-container'>
                <button onClick={() => this.createComment(this.props.favorite)}>Create a Comment</button>
                <ul>
                    Comments:
                {this.state.comments.map((comm) => (
                    <CommentCard key={comm.id} comment={comm} handleDeleteClick={this.handleDeleteClick}/>
                ))}
                </ul>
            </div>
          </Fragment>
        );
      }

}