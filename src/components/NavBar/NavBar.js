import React from 'react';
import {Link} from 'react-router';

const styles = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    listStyleType: 'none'
};

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <ul style={styles} className="nav navbar-nav">
                    <li>
                        <Link to="/">
                            Create Template
                        </Link>
                    </li>
                    <li>
                        <Link to="/Settings">
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link to="/loadtemplate">
                            Load Template
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;
