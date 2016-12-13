`use strict`;

import React from 'react';
import './DayCard.css'
class DayCard extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.activities) {
            // console.log('here');
            this.state = {
                activities: this.props.activities.map(activity => (
                    <li key={activity.startTime}>{activity.activity} : {activity.startTime}-{activity.endTime}</li>))
            };
            // console.log(this.state)
        } else{
            this.state ={};
        }
    }



    // componentWillUpdate(nextProps, nextState) {
    //     console.log(nextProps,nextState)
    //     if (nextProps.activities) {
    //         this.setState({
    //             activities: nextProps.activities.map(activity => (
    //                 <li key={activity.startTime}>{activity.activity} : {activity.startTime}-{activity.endTime}</li>))
    //         });
    //     }
    // }

    handleClick() {
        this.props.cb(this.props.date);
        this.props.popup(this.props.date);
    }

    render() {
        let style = this.props.weekend ? {opacity: ".6", backgroundColor: 'lightgrey'} : {};
        return (
            <div className=" calendarBox" style={style} onClick={this.handleClick.bind(this)}>
                <p>{this.props.date}</p>
                <ul>
                    {this.state.activities}
                </ul>
            </div>
        )
    }
}

export default DayCard;
