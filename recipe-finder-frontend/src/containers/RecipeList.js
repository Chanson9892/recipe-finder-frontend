import React from 'react';
import RecipeCard from '../components/RecipeCard';

const RecipeList = (props) => {
    console.log(props.recipes)
    return (
        <div>
             {props.recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} handleFavoriteClick={props.createRecipeOnFavoriteClick}/>
            ))}
         </div>
    )
}

export default RecipeList;