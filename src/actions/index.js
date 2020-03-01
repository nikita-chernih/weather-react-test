const citiesLoaded = (newCities) => {
    return {
        type: 'FETCH_CITIES_SUCCESS',
        payload: newCities
    }
};

const citiesRequested = (newCities) => {
    return {
        type: 'FETCH_CITIES_REQUEST',
}
};

const citiesSearch = (newTerm) => {
    return {
        type: 'FETCH_TERM_REQUEST',
        payload: newTerm
    }
};

const cityError = (newError) => {
    return {
        type: 'FETCH_CITY_FAILURE',
        error: newError
    }
};

const cityAddedToFavorite = (cityId) => {
    return {
    type: 'FETCH_CITY_ADDED_TO_FAVORITE',
    payload:cityId
    }
};

const cityRemovedFromFavorite = (cityId) => {
    return {
        type: 'CITY_REMOVE_TO_FAVORITE',
        payload:cityId
    }
};

const citySelected = (city) => {
    return {
        type: 'FETCH_CITY_SELECT',
        payload:city
    }
};

const citySearch = (term) => {
    return {
        type: 'FETCH_CITY_SEARCH',
        payload:term
    }
};

export {
    citiesLoaded,
    citiesRequested,
    citiesSearch,
    cityError,
    cityAddedToFavorite,
    cityRemovedFromFavorite,
    citySelected,
    citySearch
};