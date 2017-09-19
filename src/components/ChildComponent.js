import React, { Component } from 'react';

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.onClick} type="submit" className="btn btn-secondary">Submit Message</button>
        </div>
      </div>
    );
  }
}
