import React, { Component } from 'react';
import { view as HomePage } from './homePage';

class App extends Component {
  render() {
    return (
      <div className="full-height">
        <HomePage />
      </div>
    )
  }
}

export default App;
