import React from 'react'
import CommentContainer from '../containers/CommentContainer';

const FavoriteCard = (props) => {
    // console.log(props.fave)
    return (
    <div className='recipe-card'>
        <a target='_blank' rel="noreferrer" href={props.fave.recipe.url}>
            <h3>{props.fave.recipe.title}</h3>
            <img src={props.fave.recipe.image} alt=''/>
        </a>
        <button onClick={() => props.handleUnfavoriteClick(props.fave)}>Unfavorite</button>
        <CommentContainer favorite={props.fave}/>
    </div>
    )
}

export default FavoriteCard;