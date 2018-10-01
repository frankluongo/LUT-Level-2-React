// Install ES7 React/Redux/GraphQL... plugin

import React, { Component } from 'react'

export default class ToggleRenderProps extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    const { render } = this.props;
    const { on } = this.state;

    return (
      <div>
        {render({
          on,
          toggle: this.toggle
        })}
      </div>
    )
  }
}

