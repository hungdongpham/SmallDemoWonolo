import React, { Component } from 'react';
require("!style-loader!css-loader!sass-loader!../../style/main.scss");

import Header from './header';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header />
        </div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
