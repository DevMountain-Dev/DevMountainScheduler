`use strict`;

import React from 'react';

class DayCard extends React.Component {
    activities = this.props.activities.map(activity => (<li>activity</li>));

    componentWillReceiveProps() {
        this.activities = this.props.activities.map(activity => (<li>{activity.desc} : {activity.startTime}-{activity.endTime}</li>));
    }

    render() {
        let style = this.props.weekend ? {} : {opacity: ".6"};
        return (
            <div className="col-xs-3 tile" style={style} onClick={this.props.onclick}>
                <h2>{this.props.date}</h2>
                <ul>
                    {this.activities}
                </ul>
            </div>
        )
    }
}

export default DayCard;