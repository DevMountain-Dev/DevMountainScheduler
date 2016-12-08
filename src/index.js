"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, browserHistory, Router, Route} from 'react-router';
import App from './components/App.jsx';

require('./resources/styles/style.less');
require( 'bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.min');

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={App}/>
        </Route>
    </Router>
), document.getElementById('root'));