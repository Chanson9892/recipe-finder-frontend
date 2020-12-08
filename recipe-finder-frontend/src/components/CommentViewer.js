import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const CommentViewer = (props) => {
    // console.log(props.fave)
    return (
    <div className='comment-card'>
        <li key={props.comment.id}>
            {props.comment.content}
            <IconButton aria-label="Edit" onClick={() => props.handleEditClick(props.comment)}>
                <AddCircleOutlineIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={() => props.handleDeleteClick(props.comment)}>
                <DeleteOutlineIcon />
            </IconButton>
            {/* <button onClick={() => props.handleEditClick(props.comment)}>Edit</button> */}
            {/* <button onClick={() => props.handleDeleteClick(props.comment)}>Delete</button> */}
        </li>
    </div>
    )
}

export default CommentViewer;