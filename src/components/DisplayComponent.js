import React, { Component } from 'react';

export default class DisplayComponent extends Component {
  render() {
    return (
      <div className="card mt-5 p-5">
        <div className="card-body">
          <h4 className="card-title mb-5">Here is your message:</h4>
          <h1 className="card-text">{this.props.sayWhat}</h1>
        </div>
      </div>
    );
  }
}
