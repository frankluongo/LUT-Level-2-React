import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './ToggleRenderProps';
import ToggleRPC from './ToggleRPC';
import Portal from './Portal';
import Modal from './Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <ToggleRPC>
          {({on, toggle}) => (
            <Fragment>
              <button onClick={toggle}>Login</button>
             <Modal on={on} toggle={toggle}>
              <h1>Hey demons, it's me, ya boy</h1>
            </Modal>
            </Fragment>
          )}
        </ToggleRPC>


      </div>
    );
  }
}

export default App;
