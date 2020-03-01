import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {HomePage, CartPage} from '../pages'
import './app.css';
import {withWeatherstoreService} from '../hoc';

const App = () => {
    return (
        <Switch>
            <Route path="/"
            component={HomePage}
            exact/>
            <Route path="/cart"
                   component={CartPage}/>
        </Switch>
    )
};

export default  withWeatherstoreService()(App);