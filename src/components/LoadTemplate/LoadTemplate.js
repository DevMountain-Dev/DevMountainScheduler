"use strict";

import './LoadTemplate.css';
import React from 'react';

class LoadTemplate extends React.Component{

    constructor(props){
        super(props);
        //get stuff from db
        this.state = {};
    }

    render(){
        return(
            <div className="inputSection">
                <div >
                    Start Date &nbsp;<input id="start" placeholder="Enter start date"/>
                </div>
                <div>
                    End Date &nbsp;<input id="end" placeholder="Enter end date"/>
                </div>
                <div>{this.state.templates}</div>
                <button className="btn">Send to Google Calendar</button>
            </div>
        );
    }
}

export default LoadTemplate;