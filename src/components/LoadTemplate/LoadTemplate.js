"use strict";

import './LoadTemplate.css';
import React from 'react';

class LoadTemplate extends React.Component {

    constructor(props) {
        super(props);
        //get stuff from db
        this.state = {templates: ["Web Immersive", "Web AH", "iOS Immersive"], template: "Web Immersive"};
    }

    renderTemplates() {
        return this.state.templates.map(template => {
            return <option key={template} value={template}>{template}</option>;
        });
    }

    //sends search request
    sendToCalendar = () => {
        let data = {
            start: document.getElementById('start').value,
            end: document.getElementById('end').value,
            template: this.state.template,
            gmail: document.getElementById('gmail').value,
            pass: document.getElementById('pass').value
        };

        if (data.start && data.end && data.template && data.gmail && data.pass) {
            console.log(data);
        }

    };

    handleChange = () => {
        let template = document.getElementById('templates').value;
        this.setState({
            template: template
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
                            {this.renderTemplates()}
                        </select>
                    </div>
                    {/*<div >*/}
                        {/*Gmail &nbsp;<input type="email"  className="form-control" id="gmail" placeholder="Gmail Account"/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                        {/*Password &nbsp;<input type="password" className="form-control" id="pass" placeholder="Password"/>*/}
                    {/*</div>*/}
                    <button className="btn" onClick={this.sendToCalendar}>Send to Google Calendar</button>
                </div>
            </div>
        )
    }
}

export default LoadTemplate;