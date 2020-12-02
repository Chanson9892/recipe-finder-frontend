import React, { Component } from 'react';

export default class Comment extends Component {
    
    editBody = (e) => {
        let changes = e.target.value
        this.setState(prevState => ({
          note: {
            ...prevState.note,
            body: changes
          }
        }))
    }

    
}