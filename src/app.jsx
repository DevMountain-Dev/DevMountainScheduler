import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import NavBar from './components/NavBar/NavBar.jsx';
import CreateTemplate from './components/CreateTemplate/CreateTemplate.jsx'
import Settings from './components/Settings/Settings.jsx'

class App extends React.Component{
  render() {
    return (
      <div>
      <Router history={hashHistory}>
              <Route component={NavBar}>
                  <Route path="/" />
                  <Route path="/CreateTemplate" component={CreateTemplate} />
                  <Route path="/Settings" component={Settings.jsx}/>
              </Route>
          </Router>
      </div>

    )
  }
}

render(<App/>, document.getElementById('app'));
