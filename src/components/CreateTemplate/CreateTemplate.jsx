import React from 'react'
// import Input from '../InputComp/InputComp.jsx'
import './CreateTemplate.css'

class CreateTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            length: '',
            submitClicked: false,
            days: []

        };

        this.handleClick = this.handleClick.bind(this);
        this.alertMe     = this.alertMe.bind(this);
    }

    alertMe(e) {
        console.log(e.target);
    }

    componentDidUpdate() {


    }


    onChange(key, event) {
        this.setState({
            [key]: event.target.value,
            submitClicked: false
        })

    }

    handleClick() {

        const theBoxes = [];
        for (let i = 0; i < this.state.length; i++) {
            theBoxes.push((
                    <div key={i} className="calendarBox" onClick={this.alertMe}>{i + 1}</div>
                )
            )
        }

        this.setState({
            name: document.getElementById('name').value,
            length: document.getElementById('length').value,
            boxes: theBoxes
        })

    }

    render() {

        return (
            <div>
                <div className="inputSection">
                    <div>Template Name &nbsp;<input id="name"  placeholder="Enter name"
                    /></div>
                    <div>Length &nbsp;<input id="length"  placeholder="Enter length"
                    /></div>
                    <button onClick={this.handleClick}>Create</button>
                </div>
                <section className="calendarContainer">
                    {this.state.boxes}
                </section>
            </div>
        )
    }


}
export default CreateTemplate
