import React from 'react'

const FavoriteCard = (props) => {
    return (
    <div className='recipe-card'>
        <h3>{props.fave.recipe.title}</h3>
        <img src={props.fave.recipe.image} alt=''/>
        <button onClick={() => props.handleUnfavoriteClick(props.fave.recipe)}>Unfavorite</button>
        <br></br>
        <a target='_blank' rel="noreferrer" href={props.fave.recipe.url}>{props.fave.recipe.url}</a>
    </div>
    )
}

export default FavoriteCard;