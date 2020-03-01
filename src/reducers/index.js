import React from "react";


const initialState = {
    cities: [],
    loading: true,
    error: null,
    term: '',
    favCity: [],
    pageCity: [],
    selectedCity: {
    }
};

const updateSelectCity = (city) => {
    return {
        "id": city.id,
        "name": city.name,
        "temp": Math.floor((city.main.temp)-275)
    }
};

const updateFavCity = (city) => {
    return {
        "id": city.city.id,
        "name": city.city.name,
        "today": Math.floor((city.list[0].main.temp)-275),
        "tomorrow": Math.floor((city.list[8].main.temp)-275),
        "after3day": Math.floor((city.list[16].main.temp)-275),
        "after4day": Math.floor((city.list[24].main.temp)-275),
        "after5day": Math.floor((city.list[32].main.temp)-275)
    }
};

const updateOrder = (state, city) => {
    const cityId =  city.city.id;
    const cityIndex  = state.favCity.findIndex(({id}) => id === cityId);

        if (cityIndex > -1) {
            alert('This city is already in your favorites');
            return state;
        }
        const newItem = updateFavCity(city);
        return { ...state,
            loading: false,
                favCity: [ ...state.favCity, newItem]}
};

const deleteOrder = (state, cityId, type) => {
    const cityIndex  = state.favCity.findIndex(({id}) => id === cityId);
        const newItem = [
            ...state.favCity.slice(0, cityIndex),
            ...state.favCity.slice(cityIndex+1)
        ];
        return { ...state,
            favCity: newItem}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CITIES_REQUEST' : return {
            cities: state.cities,
            loading: true,
            error: null,
            term: '',
            favCity: state.favCity,
            pageCity: state.pageCity,
            selectedCity: state.selectedCity
        };
        case 'FETCH_TERM_REQUEST' : return {
            cities: state.cities,
            term: state.term,
            loading: false,
            error: null,
            favCity: state.favCity,
            pageCity: state.pageCity,
            selectedCity: state.selectedCity
        };
        case 'FETCH_CITIES_SUCCESS': return {
            cities: action.payload,
            loading: false,
            term: state.term,
            error: null,
            favCity: state.favCity,
            pageCity: state.pageCity,
            selectedCity: state.selectedCity
        };
        case 'FETCH_CITY_FAILURE': return {
            cities: [],
            loading: false,
            term: '',
            error: action.payload,
            pageCity: [],
            favCity: [],
            selectedCity: []
        };
        case 'FETCH_CITY_SEARCH':
            const term  = action.payload;
            return {
                ...state,
                term: term
            };
        case 'FETCH_CITY_SELECT':
            const favCity = updateSelectCity(action.payload);
            return {
                ...state,
                selectedCity: favCity
            };
        case 'FETCH_CITY_ADDED_TO_FAVORITE':
           return updateOrder(state, action.payload);
        case 'CITY_REMOVE_TO_FAVORITE':
            return deleteOrder(state, action.payload, false);
        case 'CITY_NEW_PAGE_SELECTED':
            return {
                ...state,
                pageCity: action.payload
            };
    }
    return state;
};

export default reducer;