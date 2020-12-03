import React, { Component } from 'react';
import CommentEditor from '../components/CommentEditor';
import CommentViewer from '../components/CommentViewer';


export default class CommentContent extends Component {

    state={
        editClicked: false
    }

    handleEditClick = () => {
        this.setState({
          editClicked: true,
        })
    }

    handleCancelClick = () => {
        this.setState({
          editClicked: false,
        })
    }


    renderContent = () => {
        if (this.state.editClicked === true) {
            return <CommentEditor comment={this.props.comment} handleCancelClick={this.handleCancelClick} 
            editClicked={this.state.editClicked} updateComments={this.props.updateComments}/>;
        } else if (this.state.editClicked === false) {
            return < CommentViewer comment={this.props.comment} handleEditClick={this.handleEditClick} 
            editClicked={this.state.editClicked} handleDeleteClick={this.props.handleDeleteClick}/>;
        }
    }

    render() {
        // console.log(this.props.comment)
        return (
        <div className='master-detail-element detail'>
            {this.renderContent()}
        </div>
        );
    }
}
