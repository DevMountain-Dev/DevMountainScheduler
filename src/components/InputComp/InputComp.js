import React from 'react';
import './InputComp.css';
class InputComp extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  handleClose(){
    this.props.closePopup()
  }
  handleClick(){
    var data = document.getElementById('testInput').value
    this.props.addDayData({data: data, day: this.props.dayClicked})
  }

  render(){
    return (
      <div className="popup">
      <div className="xRow"><div onClick={this.handleClose.bind(this)}className="x">x</div></div>
      Key of day clicked was {this.props.dayClicked}
      <input placeholder='test' id="testInput"/>
      <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    )
  }



}
export default InputComp
