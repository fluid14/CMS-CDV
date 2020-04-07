import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import theme from 'theme/theme';
import { ThemeProvider } from 'styled-components/macro';
// import Preloader from '../components/Preloader/Preloader';

const GlobalTemplate = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/*<Preloader/>*/}
      {children}
    </ThemeProvider>
  </>
);

GlobalTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalTemplate;
