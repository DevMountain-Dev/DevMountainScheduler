"use strict";

import './LoadTemplate.css';
import react from 'react';

class LoadTemplate extends react.Component{

    constructor(props){
        super(props);
        //get stuff from db
    }

    render(){
        return(
            <div>
                <div>
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