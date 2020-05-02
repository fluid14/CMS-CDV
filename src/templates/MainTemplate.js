import React from 'react';
import PropTypes from 'prop-types';
import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';
import { UserContextProvider } from '../context/userContext/UserContext';
import Preloader from '../components/Preloader/Preloader';

const MainTemplate = ({ children }) => (
  <>
    <UserContextProvider>
      <NavBar />
      <Preloader />
      {children}
      <Footer />
    </UserContextProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
