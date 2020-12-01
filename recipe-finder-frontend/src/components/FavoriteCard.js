import React from 'react'

const FavoriteCard = (props) => (
    <div className='recipe-card'>
        <h3>{props.recipe.title}</h3>
        <img src={props.recipe.image} alt=''/>
        <button onClick={() => props.handleUnfavoriteClick()}>Unfavorite</button>
        <br></br>
        <a target="_blank" href={props.recipe.sourceUrl}>{props.recipe.sourceUrl}</a>
    </div>
)

export default FavoriteCard;