import React from 'react'

const FavoriteCard = (props) => (
    <div className='recipe-card'>
        <h3>{props.recipe.title}</h3>
        {/* <button onClick={() => props.handleUnfavoriteClick(props.recipe)}>Unfavorite</button> */}
        <img src={props.recipe.image} alt=''/>
        <br></br>
        <a target="_blank" href={props.recipe.url}>{props.recipe.url}</a>
    </div>
)

export default FavoriteCard;