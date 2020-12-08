import React from 'react'
import CommentContainer from '../containers/CommentContainer';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const FavoriteCard = (props) => {
    // console.log(props.fave)
    return (
    <div className='recipe-card'>
        <a target='_blank' rel="noreferrer" href={props.fave.recipe.url}>
            <h3>{props.fave.recipe.title}</h3>
            <img src={props.fave.recipe.image} alt=''/>
        </a>
        <IconButton aria-label="Unfavorite" onClick={() => props.handleUnfavoriteClick(props.fave)}>
                <FavoriteBorderIcon />
        </IconButton>
        {/* <button onClick={() => props.handleUnfavoriteClick(props.fave)}>Unfavorite</button> */}
        <CommentContainer favorite={props.fave}/>
    </div>
    )
}

export default FavoriteCard;