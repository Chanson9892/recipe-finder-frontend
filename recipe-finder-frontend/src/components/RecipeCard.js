import React from 'react'

const RecipeCard = (props) => {
    return (
    <div className='recipe-card'>
        <h3>{props.recipe.title}</h3>
        <img src={props.recipe.image} alt=''/>
        <button onClick={() => props.handleFavoriteClick(props.recipe)}>Favorite</button>
        <br></br>
        <a target="_blank" rel="noreferrer" href={props.recipe.sourceUrl}>{props.recipe.sourceUrl}</a>
        <div>Ingredients:</div>
        <ul>
            {props.recipe.extendedIngredients.map((ingredient) => (
                <li key={ingredient.original}>{ingredient.original}</li>
            ))}
        </ul>
    </div>
    )
}

export default RecipeCard;