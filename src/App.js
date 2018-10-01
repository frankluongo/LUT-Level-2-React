import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './toggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Toggle>
          <h1>Poop!</h1>
        </Toggle>
      </div>
    );
  }
}

export default App;
