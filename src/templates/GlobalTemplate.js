import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import theme from 'theme/theme';
import { ThemeProvider } from 'styled-components/macro';

const GlobalTemplate = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </>
);

GlobalTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalTemplate;
