import React from 'react';
import {Link} from 'react-router';

var styles = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  listStyleType: 'none'
}

class NavBar extends React.Component {
  render(){
    return (
      <div>
        <ul style={styles}>
          <Link to="/CreateTemplate">
            <li>Create Template</li>
          </Link>
          <Link to="/Settings">
            <li>Settings</li>
          </Link>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default NavBar;
