import React from 'react'
// import Input from '../InputComp/InputComp.jsx'
import './CreateTemplate.css'
import DayCard from '../DayCard/DayCard'
import InputComp from '../InputComp/InputComp'
class CreateTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            length: '',
            submitClicked: false,
            days: [],
            activities: [],
            showPopUp: false,
            dayClicked: '',
            dayData: ''


        };
        // console.log(this.state)

        this.createTemplate = this.createTemplate.bind(this)
    }

    alertMe(data) {
        console.log(data);
    }


    // onChange(key, event) {
    //     this.setState({
    //         [key]: event.target.value,
    //         submitClicked: false
    //     })
    // }

    popup(day) {
        this.setState({
            showPopUp: true,
            dayClicked: day
        })
    }

    closePopup() {
        this.setState({
            showPopUp: false
        })
    }

    submitDayData(dataObj) {
        console.log(dataobj)
    }


    createTemplate() {
        let boxes      = [];
        let name       = document.getElementById('name').value;
        let length     = document.getElementById('length').value;
        let activities = new Array(Number(length)).fill([]);
        this.setState({
            name,
            length,
            activities
        }, function () {
            for (let i = 0; i < length; i++) {
                let weekendDays = [6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 41, 42, 48, 49, 55, 56, 62, 63, 69, 70, 76, 77, 83, 84, 90, 91];
                let weekend     = (weekendDays.indexOf(i + 1) !== -1);
                boxes.push((
                        <DayCard weekend={weekend}
                                 date={i + 1}
                                 activities={this.state.activities[i]}
                                 key={i}
                                 cb={this.alertMe.bind(this)}
                                 popup={this.popup.bind(this)}/>
                    )
                )
            }
            this.setState({boxes});
        });

    }


    handleClick() {
        this.createTemplate()
    }

    handleEnter(e) {
        if (e.keyCode === 13) {
            this.createTemplate()
        }
    }

    addDayData(dayData) {
        let activities          = [...this.state.activities];
        activities[Number(dayData.day)] = [...activities[Number(dayData.day) - 1]].push(dayData.data);
        this.setState({activities},()=>{
            console.log(this.state.activities)
        });
    }

    render() {

        return (
            <div>
                <div className="inputSection">
                    <div>Template Name &nbsp;<input id="name" placeholder="Enter name"
                    /></div>
                    <div>Length &nbsp;<input id="length" placeholder="Enter length"
                                             onKeyUp={this.handleEnter.bind(this)}
                    /></div>
                    <button onClick={this.handleClick.bind(this)}>Create</button>

                    {this.state.showPopUp ?
                        <InputComp dayClicked={this.state.dayClicked} closePopup={this.closePopup.bind(this)}
                                   addDayData={this.addDayData.bind(this)} className="popup"/> : null}
                </div>
                <section className="calendarContainer">
                    <div className="calendarSection">{this.state.boxes}</div>
                </section>

            </div>
        )
    }
}
export default CreateTemplate
