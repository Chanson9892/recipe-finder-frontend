import React from 'react';
import RecipeCard from '../components/RecipeCard';

const RecipeList = (props) => {
    return (
        <>
            {props.recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} handleFavoriteClick={props.createRecipeOnFavoriteClick}/>
            ))}
         </>
    )
}

export default RecipeList;