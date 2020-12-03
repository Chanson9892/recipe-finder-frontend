import React from 'react'
import CommentContainer from '../containers/CommentContainer';

const FavoriteCard = (props) => {
    // console.log(props.fave)
    return (
    <div className='recipe-card'>
        <h3>{props.fave.recipe.title}</h3>
        <img src={props.fave.recipe.image} alt=''/>
        <button onClick={() => props.handleUnfavoriteClick(props.fave)}>Unfavorite</button>
        <br></br>
        <a target='_blank' rel="noreferrer" href={props.fave.recipe.url}>{props.fave.recipe.url}</a>
        <CommentContainer favorite={props.fave}/>
    </div>
    )
}

export default FavoriteCard;