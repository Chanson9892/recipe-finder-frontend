import React from 'react';
import FavoriteCard from '../components/FavoriteCard';

const FavoriteList = (props) => {
    return (
        <div>
             {props.userFavorites.map((userFavorite) => (
                <FavoriteCard key={userFavorite.id} fave={userFavorite} handleUnfavoriteClick={props.handleUnfavoriteClick}/>
            ))}
        </div>
    )
}

export default FavoriteList;