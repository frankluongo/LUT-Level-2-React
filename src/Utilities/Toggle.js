// Install ES7 React/Redux/GraphQL... plugin

import { Component } from 'react'

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
    const { children } = this.props;
    const { on } = this.state;

    return children({
      on,
      toggle: this.toggle
    });
  }
}

