import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import theme from 'theme/theme';
import { ThemeProvider } from 'styled-components/macro';

class GlobalTemplate extends Component {
  state = {
    user: {
      userName: '',
      id: '',
      role: '',
    },
  };

  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    );
  }
}

GlobalTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalTemplate;
