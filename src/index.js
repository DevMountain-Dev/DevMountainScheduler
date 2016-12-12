"use strict";

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App'
import CreateTemplate from './components/CreateTemplate/CreateTemplate';
import Settings from './components/Settings/Settings.jsx';
import LoadTemplate from './components/LoadTemplate/LoadTemplate'

require('./css/reset.css');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.min');

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={CreateTemplate}/>
            <Route path="/Settings" component={Settings}/>
            <Route path="/loadtemplate" component={LoadTemplate}/>
        </Route>
    </Router>
), document.getElementById('app'));