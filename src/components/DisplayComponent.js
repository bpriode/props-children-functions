import React, { Component } from 'react';

export default class DisplayComponent extends Component {
  render() {
    return (
      <div className="card mt-5 p-5">
        <div className="card-body">
          <h4 className="card-title">Here is your message:</h4>
          <h5 className="card-text">{this.props.sayWhat}</h5>
        </div>
      </div>
    );
  }
}
