"use strict";

import './LoadTemplate.css';
import React from 'react';

class LoadTemplate extends React.Component {

    constructor(props) {
        super(props);
        //get stuff from db

        this.state = {
            templates: ["Web Immersive", "Web AH", "iOS Immersive"],
            template: "Web Immersive",
            calendars:["1","2","hi"]
        };
    }

    renderOptions(arr) {
        return arr.map(template => {
            return <option key={template} value={template}>{template}</option>;
        });
    }

    //sends search request
    sendToCalendar = () => {
        let data = {
            start: document.getElementById('start').value,
            end: document.getElementById('end').value,
            template: this.state.template,
            calendar:this.state.calendar
        };

        if (data.start && data.end && data.template && data.gmail && data.pass) {
            console.log(data);
        }

    };

    handleChange = (key, val) => {
        let temp = document.getElementById(key).value;
        this.setState({
            [key]: val
        });
    };

    render() {
        return (
            <div id="loadTemplate">
                <div className="loadForm">
                    <div >
                        Start Date &nbsp;<input id="start" className="form-control" placeholder="Enter start date"/>
                    </div>
                    <div>
                        End Date &nbsp;<input id="end" className="form-control" placeholder="Enter end date"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="templates" className="white-text">Templates</label>
                        <select className="form-control" ref="templates" id="templates"
                                onChange={this.handleChange}>
                            {this.renderOptions(this.state.templates)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="templates" className="white-text">Calendars</label>
                        <select className="form-control" ref="calendars" id="calendars"
                                onChange={this.handleChange}>
                            {this.renderOptions(this.state.calendars)}
                        </select>
                    </div>
                    <button className="btn" onClick={this.sendToCalendar}>Send to Google Calendar</button>
                </div>
            </div>
        )
    }
}

export default LoadTemplate;