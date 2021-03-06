import React, { Component } from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <div className="message">
        <div className="row justify-content-center">
          {this.props.children}
        </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
