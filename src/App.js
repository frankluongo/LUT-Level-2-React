import React, { Component, Fragment } from 'react';
import { Transition } from 'react-spring';

import logo from './logo.svg';
import './App.css';
import { Toggle } from 'Utilities';
import { Modal, Card } from 'Elements';
import User from './User';
import { UserProvider } from './UserProvider';

import Drag from './Drag';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Drag />
          <section>
            <Toggle>
              {({on, toggle}) => (
                <Fragment>
                  <button onClick={toggle}>Login</button>
                  <Modal on={on} toggle={toggle}>
                    <h1>Hey demons, it's me, ya boy</h1>
                  </Modal>
                </Fragment>
              )}
            </Toggle>
          </section>
        </div>
      </UserProvider>
    );
  }
}


// <User />

// <Toggle>
// {({on, toggle}) => (
//   <Fragment>
//     <button onClick={toggle}>Show/Hide</button>
//     <Transition
//       from={{opacity: 0, bg: '#82d8d8', height: '0px'}}
//       enter={{opacity: 1, bg: '#524763', height: '100%'}}
//       leave={{opacity: 0, bg: '#82d8d8', height: '0px'}}
//     >
//       {on && Header}
//     </Transition>
//   </Fragment>
// )}
// </Toggle>

const Header = styles => (
  <Card style={{
    opacity: styles.opacity,
    background: styles.bg,
    height: styles.height,
    overflow: 'hidden'
  }}>
    <h1>Show Me</h1>
    <h3>{styles.bg}</h3>
  </Card>
)

export default App;
