import React from 'react';
import './app.css';
import CitiesList from "../cities-list";
import SearchPanel from "../search-panel";
import WeatherValue from "../weather-value";
import FavoriteCityTable from "../favotire-city-table";
import {withWeatherstoreService} from '../hoc';


const App = ({}) => {
    return (
        <div className='container'>
        <SearchPanel/>
        <CitiesList />
        <WeatherValue/>
        <FavoriteCityTable/>
        </div>
    )
};

export default  withWeatherstoreService()(App);