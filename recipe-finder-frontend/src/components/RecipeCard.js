import React from 'react'

const RecipeCard = (props) => {
    return (
    <div className='recipe-card'>
        <h3>{props.recipe.title}</h3>
        <img src={props.recipe.image} alt=''/>
        <button onClick={() => props.handleFavoriteClick(props.recipe)}>Favorite</button>
        <a target="_blank" rel="noreferrer" href={props.recipe.sourceUrl}>{props.recipe.sourceName}</a>
        <p className='missing-ingredients'>Missing Ingredients:</p>
        <ul className='recipe-ingredients'>
            {props.recipe.missedIngredients.map((ingredient) => (
                <li key={ingredient.original}>{ingredient.name}</li>
            ))}
        </ul>
    </div>
    )
}

export default RecipeCard;