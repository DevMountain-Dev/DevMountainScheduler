`use strict`;

import React from 'react';

class DayCard extends React.Component {
    constructor(props) {
        super(props);
        // if (this.props.activities) {
        //     console.log('here');
        //     this.state={activities :this.props.activities.map(activity => (<li>activity</li>))};
        //     console.log(this.state)
        // }
    }

    componentWillReceiveProps() {
        // if (this.props.activities) {
        //     this.setState({
        //         activities: this.props.activities.map(activity => (
        //             <li>{activity.desc} : {activity.startTime}-{activity.endTime}</li>))
        //     });
        // }
    }
    handleClick(){
        this.props.cb(this.props.date)
    } 

    render() {
        let style = this.props.weekend ? {} : {opacity: ".6"};
        return (
            <div className="col-xs-3 calendarBox" style={style} onClick={this.handleClick.bind(this)}>
                <h2>{this.props.date}</h2>
                <ul>
                    {this.activities}
                </ul>
            </div>
        )
    }
}

export default DayCard;