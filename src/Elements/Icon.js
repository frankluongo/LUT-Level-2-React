import React, { Component } from 'react'

export default class Icon extends Component {
  static defaultProps = {
    color: "#333333"
  }

  render() {
    const { name } = this.props;
    switch (name) {
      case 'close':
        return (
          <svg
            x="0px"
            y="0px"
            width="12px"
            height="12px"
            viewBox="0 0 212.982 212.982"
            enableBackground="new 0 0 212.982 212.982"
          >
          <path
            fill={this.props.color}
            d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312
              c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312
              l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937
              c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/>
          </svg>
        );
      case 'search':
        return (
          <div>
            Search me!
          </div>
        );
      default:
          console.log('sad');
      break;
    }
  }
}
