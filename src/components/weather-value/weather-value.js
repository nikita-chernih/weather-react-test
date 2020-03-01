import React, {Component} from "react";
import './weather-value.css'
import {connect} from "react-redux";
import {withWeatherstoreService} from '../hoc'
import { citiesRequested, cityAddedToFavorite, citySelected} from "../../actions";



class WeatherValue extends Component {

    componentDidMount() {
        if (!this.props.items.name) {
            //id Kemerovo
            this.props.initialKem(1503901);
        }
    }

    render() {
        const {items, addToFavorite} = this.props;

        const {id, name, temp} = items;

        return (
            <div className='weather-value text-center row' key={id}>
                <div className="col-12">
                    <span className='fs48'>{name}</span>
                    <button
                        onClick={() => addToFavorite(id)}
                        className="btn btn-outline-danger btn-sm text-center va-tb">
                        <i className="fa fa-heart"/>
                    </button>
                </div>
                <div className="col-12">
                    <span className='fs48'> {temp} ‎℃</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({selectedCity}) => {
    return{
        items: selectedCity
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {weatherstoreService} = ownProps;
    return {
        addToFavorite: (id) => {
            dispatch(citiesRequested());
            weatherstoreService.getFiveDayWeather(id)
                                .then((data) => dispatch(cityAddedToFavorite(data)));

        },
        initialKem: (id) => {
            weatherstoreService.getTodayWeather(id)
                .then((data) =>  dispatch(citySelected(data)));
    }
    }
};

export default withWeatherstoreService()(connect(mapStateToProps,mapDispatchToProps)(WeatherValue));