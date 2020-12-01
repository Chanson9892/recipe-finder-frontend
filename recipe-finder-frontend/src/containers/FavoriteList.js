import React from 'react';
import FavoriteCard from '../components/FavoriteCard';

const FavoriteList = (props) => {
    return (
        <div>
             {props.recipes.map((recipe) => (
                <FavoriteCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    )
}

export default FavoriteList;