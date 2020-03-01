import React from "react";
import './cities-list-item.css'

const CitiesListItem = ({cities, onAddedToFavorite}) => {
    const {name} = cities;

    return (
        <span onClick={onAddedToFavorite}>{name}</span>
    )
};

export default CitiesListItem;