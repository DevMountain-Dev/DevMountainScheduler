"use strict";

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App.js'
import CreateTemplate from './components/CreateTemplate/CreateTemplate.jsx';
// import Settings from './components/Settings/Settings.jsx';

require('./css/reset.css');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.min');

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={CreateTemplate}/>
            {/*<Route path="/Settings" component={Settings}/>*/}
        </Route>
    </Router>
), document.getElementById('app'));