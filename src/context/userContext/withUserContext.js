import React from 'react';
import UserContext from './UserContext';

export function withTheme(Component) {
  return function UserComponent(props) {
    return (
      <UserContext.Consumer>
        {contexts => <Component {...props} {...contexts} />}
      </UserContext.Consumer>
    );
  };
}
