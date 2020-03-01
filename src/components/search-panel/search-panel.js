import React from 'react';
import {connect} from "react-redux";
import './search-panel.css';
import {citySearch} from "../../actions";

const SearchPanel = ({citySearch}) => {

    return (
        <input type="text"
                    onChange={(e) => citySearch(e.target.value)}
                    className='search-panel form-control search-input'
                    placeholder='type to search city'/>
    )
};

const mapStateToProps = ({term}) => {
    return{
       term
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        citySearch: (e) => dispatch(citySearch(e))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);