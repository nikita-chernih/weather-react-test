import React, {Component} from "react";
import CitiesListItem from "../cities-list-item";
import "./cities-list.css";
import {connect } from 'react-redux';
import {citiesLoaded, cityError, citySelected} from "../../actions";
import {withWeatherstoreService} from '../hoc'
import ErrorIndicator from "../error-indicator";

class CitiesList extends Component {

    componentDidMount() {
        this.props.fetchCities();
    }

    search = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.name.toLowerCase()
                            .indexOf(term.toLowerCase()) > -1;
        })
    };

    render() {

        const {cities, error, term, citySelected} = this.props;

        const visibleItem = this.search(cities, term);

        if (error) {
            return <ErrorIndicator/>
        }

        return (
            <ul className='cities-list'>
                {
                    visibleItem.map((city) => {
                        return (
                            <li key={city.id} onClick={() => citySelected(city.id)}><CitiesListItem cities={city}/></li>
                        )
                    })
                }
            </ul>

        )
    }
}

const mapStateToProps = ({cities,  error, term}) => {
  return {
      cities,
      error,
      term
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {weatherstoreService} = ownProps;
    return {
        fetchCities:() => {
            weatherstoreService.getCities()
                .then((data) => dispatch(citiesLoaded(data)))
                .catch((err) => dispatch(cityError(err)));
        },
        citySelected:(id) =>  {
           weatherstoreService.getTodayWeather(id)
                              .then((data) =>  dispatch(citySelected(data)));
        }
    }
};

export default withWeatherstoreService()(connect(mapStateToProps,mapDispatchToProps)(CitiesList));