import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import NavBar from './components/NavBar/NavBar.jsx';
import CreateTemplate from './components/CreateTemplate/CreateTemplate.jsx'
import Settings from './components/Settings/Settings.jsx'

render(<Router history={hashHistory}>
    <Route component={NavBar}>
        <Route path="/" />
        <Route path="/CreateTemplate" component={CreateTemplate} />
        <Route path="/Settings" component={Settings}/>
    </Route>
</Router>, document.getElementById('app'));
