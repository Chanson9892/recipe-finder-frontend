import React from 'react';
import RecipeCard from '../components/RecipeCard';

const RecipeList = (props) => {
    return (
        <div>
             {props.recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} handleFavoriteClick={props.createRecipeOnFavoriteClick}/>
            ))}
         </div>
    )
}

export default RecipeList;