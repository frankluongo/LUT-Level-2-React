import React, { Component } from 'react';
import { UserContext } from './UserContext';

export class UserProvider extends Component {
  state = {
    id: '124',
    name: 'Frank',
    email: 'frank@frankluongo.com'
  }

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: ''
    })
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
