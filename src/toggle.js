// Install ES7 React/Redux/GraphQL... plugin

import React, { Component } from 'react'

export default class Toggle extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    const { on } = this.state;

    return (
      <div>
        {on && this.props.children}
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    )
  }
}

