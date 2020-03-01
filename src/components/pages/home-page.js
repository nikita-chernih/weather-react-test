import React from 'react';
import CitiesList from "../cities-list";
import SearchPanel from "../search-panel";
import WeatherValue from "../weather-value";
import FavoriteCityTable from "../favotire-city-table";


const HomePage = () => {
    return (
        <div className='container'>
        <SearchPanel/>
        <CitiesList/>
        <WeatherValue/>
        <FavoriteCityTable/>
        </div>
    )
};

export default HomePage;