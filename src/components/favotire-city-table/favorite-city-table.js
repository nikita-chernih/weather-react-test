import React from "react";
import {connect } from 'react-redux'
import './favorite-city-table.css'
import Spinner from "../spinner"
import {Link} from "react-router-dom";
import {cityRemovedFromFavorite, cityNewPageSelected} from "../../actions"

const FavoriteCityTable = ({items, onDelete, onSelect, loading}) => {

    //Загруза очень быстрая, лишь общий вид портит, если включить
    // if (loading) {
    //     return <Spinner/>
    // }

    return (
        <div className='favorite-city-table'>
            <h2>Your Favorite City</h2>
            <table className='table'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>City</th>
                    <th>Today</th>
                    <th>Tomorrow</th>
                    <th>after 3 day</th>
                    <th>after 4 day</th>
                    <th>after 5 day</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map((item, idx) => {
                        const {id, name, today, tomorrow, after3day, after4day, after5day} = item;
                        return (
                            <tr key={id}>
                                <td>{idx + 1}</td>
                                <td className='td-clicker' onClick={() => onSelect(item) }> <Link to='/cart'>{name}</Link></td>
                                <td>{today} ‎℃</td>
                                <td>{tomorrow} ‎℃</td>
                                <td>{after3day} ‎℃</td>
                                <td>{after4day} ‎℃</td>
                                <td>{after5day} ‎℃</td>
                                <td>
                                    <button
                                        onClick={() => onDelete(id)}
                                        className="btn btn-outline-danger btn-sm text-center">
                                        <i className="fa fa-trash-o" />
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>
        </div>
    )
};

const mapStateToProps = ({favCity, loading}) => {
    return{
        items: favCity,
        loading
    }
};

const mapDispatchToProps = {
        onDelete:cityRemovedFromFavorite,
        onSelect: cityNewPageSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCityTable);