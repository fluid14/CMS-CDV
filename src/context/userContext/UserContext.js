import React from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext();

class UserContextProvider extends React.Component {
  state = {
    userName: sessionStorage.getItem('userName'),
    id: sessionStorage.getItem('token'),
    role: sessionStorage.getItem('role'),
  };

  loginUser = (key, val) => {
    this.setState({ [key]: val });
  };

  render() {
    const { children } = this.props;
    return (
      <UserContext.Provider value={{ user: this.state, loginUser: this.loginUser }}>
        {children}
      </UserContext.Provider>
    );
  }
}

const UserContextConsumer = ({ children }) => (
  <UserContext.Consumer>{children}</UserContext.Consumer>
);

UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

UserContextConsumer.propTypes = {
  children: PropTypes.element.isRequired,
};

export { UserContext, UserContextProvider, UserContextConsumer };
