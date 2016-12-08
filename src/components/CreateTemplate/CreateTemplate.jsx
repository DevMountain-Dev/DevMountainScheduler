import React from 'react'
import Input from '../InputComp/InputComp.jsx'
import './CreateTemplate.css'

class CreateTemplate extends React.Component{
constructor(props){
super(props);
this.state = {
  name: '',
  length: '',
  submitClicked: false,
    days:[

    ]

  }

this.handleClick = this.handleClick.bind(this)
this.alertMe = this.alertMe.bind(this)



}
alertMe(e){
  console.log(e.target);
}

componentDidUpdate(){
  var theBoxes = []
  for(var i = 0; i < this.state.length; i++){
    theBoxes.push(i)
  }
  this.boxes = theBoxes.map((val, i, arr) => {
            return (
                <div key={i} className="calendarBox" onClick={this.alertMe}>{i + 1}</div>
            )
        })
}


onChange(key, event){
  this.setState({
  [key]: event.target.value,
  submitClicked: false

  })

}

handleClick(){
    this.setState({
          name: this.state.name,
          length: this.state.length,
          submitClicked: true
      })

}

render(){

return (
    <div>
    <div className="inputSection">
    <div>Template Name &nbsp;<input value={this.state.name} placeholder="Enter name" onChange={this.onChange.bind(this, 'name')}/></div>
    <div>Length &nbsp;<input value={this.state.length} placeholder="Enter length" onChange={this.onChange.bind(this, 'length')}/></div>
    <button onClick={this.handleClick}>Create</button>
    </div>
    <section className="calendarContainer">{this.state.submitClicked ? <div className='calendarSection'>{this.boxes}</div> : null}</section>
    </div>
)
}


}
export default CreateTemplate
