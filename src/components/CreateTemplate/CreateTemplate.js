import React from 'react'
// import Input from '../InputComp/InputComp.jsx'
import './CreateTemplate.css'
import DayCard from '../DayCard/DayCard'
class CreateTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            length: '',
            submitClicked: false,
            days: [],
            activities:[]
        };
    }

    alertMe(data) {
        console.log(data);
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

        let theBoxes = [];
        let name = document.getElementById('name').value;
        let length = document.getElementById('length').value;
        let activities = new Array(length).fill([]);
        this.setState({
            name,
            length,
            activities
        });
        for (let i = 0; i < this.state.length; i++) {
            theBoxes.push((
                    <DayCard weekend={false}
                             date={i}
                             activities={this.state.activities[i]}
                             key={i}
                             cb={this.alertMe.bind(this)}/>
                )
            )
        }
        this.setState({boxes: theBoxes}, this.forceUpdate);
    }

    render() {

        return (
            <div>
                <div className="inputSection">
                    <div>Template Name &nbsp;<input id="name" placeholder="Enter name"
                    /></div>
                    <div>Length &nbsp;<input id="length" placeholder="Enter length"
                    /></div>
                    <button onClick={this.handleClick.bind(this)}>Create</button>
                </div>
                <section className="calendarContainer">
                    <div className="calendarSection">{this.state.boxes}</div>
                </section>
            </div>
        )
    }
}
export default CreateTemplate
