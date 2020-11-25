import React from 'react'

const RecipeCard = (props) => (
    <div className='recipe-card'>
        <h3>{props.recipe.title}</h3>
    </div>
)

export default RecipeCard;