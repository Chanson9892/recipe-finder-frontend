
const CommentViewer = (props) => {
    // console.log(props.fave)
    return (
    <div className='comment-card'>
        <li key={props.comment.id}>
            {props.comment.content}
            <button onClick={() => props.handleEditClick(props.comment)}>Edit</button>
            <button onClick={() => props.handleDeleteClick(props.comment)}>Delete</button>
        </li>
    </div>
    )
}

export default CommentViewer;