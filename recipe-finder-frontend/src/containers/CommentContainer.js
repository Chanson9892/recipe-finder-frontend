import React, { Component, Fragment } from 'react';


const API = "http://localhost:3000"

let token = localStorage.getItem('token')

export default class CommentContainer extends Component {


    createComment = (favorite) => {
        fetch(API + `/comments`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                content: 'Placeholder',
                favorite_id: favorite.id 
            })
        })
        .then(res => res.json())
    }

    handleDeleteClick = (favorite) => {
        fetch(API + `/comments/${favorite.id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
    }

}