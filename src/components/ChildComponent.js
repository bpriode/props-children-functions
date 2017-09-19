import React, { Component } from 'react';

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.onClick} type="submit" class="btn btn-primary">Submit Message</button>
        </div>
      </div>
    );
  }
}
