import React from 'react';
import FavoriteCard from '../components/FavoriteCard';

const FavoriteList = (props) => {
    return (
        <div>
             {props.userFavorites.map((userFavorite) => (
                <FavoriteCard key={userFavorite.id} recipe={userFavorite.recipe} />
            ))}
        </div>
    )
}

export default FavoriteList;