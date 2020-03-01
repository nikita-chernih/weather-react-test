import React, {Component} from "react";
import './weather-single.css'
import {connect} from "react-redux";
import {withWeatherstoreService} from '../hoc'
import {Link} from "react-router-dom";



class WeatherSingle extends Component {

    render() {

        const {id, name, today, tomorrow, after3day, after4day, after5day} = this.props.pageCity;
        return (
            <div key={id} className='container text-center weather-single'>
                <button
                    className="btn btn-outline-danger btn-sm text-right va-tb closebutton">
                   <Link to='/'><i className="fa fa-times"/></Link>
                </button>
            <h1>{name}</h1>
            <h2>Today: {today}℃</h2>
            <h2>Tomorrow: {tomorrow}℃</h2>
            <h2>After 3 Day: {after3day}℃</h2>
            <h2>After 4 Day: {after4day}℃</h2>
            <h2>After 5 Day: {after5day}℃</h2>
            </div>
        )
    }
}

const mapStateToProps = ({pageCity}) => {
    return{
        pageCity
    }
};


export default withWeatherstoreService()(connect(mapStateToProps)(WeatherSingle));