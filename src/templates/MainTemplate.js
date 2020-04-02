import React from 'react';
import PropTypes from 'prop-types';
import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';

const MainTemplate = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
