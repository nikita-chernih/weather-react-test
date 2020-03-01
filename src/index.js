import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import WeatherstoreService from "./services/weatherstore-service";
import {WeatherstoreServiceProvider} from "./components/weatherstore-service-context";
import store from "./store";

const weatherstoreService = new WeatherstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <WeatherstoreServiceProvider value={weatherstoreService}>
                <Router>
                    <App/>
                </Router>
            </WeatherstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
