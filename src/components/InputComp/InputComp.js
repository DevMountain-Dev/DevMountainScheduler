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

  render(){
    return (
      <div className="popup">
      <div className="xRow"><div onClick={this.handleClose.bind(this)}className="x">x</div></div>
      Key of day clicked was {this.props.dayClicked}
      </div>
    )
  }



}
export default InputComp
