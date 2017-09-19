import React, { Component } from 'react';

import ChildComponent from './ChildComponent.js'
import DisplayComponent from './DisplayComponent.js'

export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    let whatToSay = e.target.value
    this.setState({whatToSay: whatToSay});
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  render() {
    return (
      <div className="form-control form-control-lg w-50">
        <form>
        <div className='form-group'>
          <input className="form-control" onChange={this.handleInput} type="text" placeholder="What do you need to say?" />
        </div>
          <ChildComponent onClick={this.handleSubmit}/>
        </form>
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
        </div>
    );
  }
}
