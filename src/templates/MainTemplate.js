import React from 'react';
import PropTypes from 'prop-types';
import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';
import { Container } from 'reactstrap';

const MainTemplate = ({ children }) => (
  <>
    <NavBar />
    <Container>{children}</Container>
    <Footer />
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
