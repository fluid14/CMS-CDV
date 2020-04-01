import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from 'components/text/Title/Title';

const Wrap = styled.div`
  width: 100%;
  text-align: center;
`;

const MainTitle = ({ children }) => (
  <Wrap>
    <Title>{children}</Title>
  </Wrap>
);

MainTitle.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MainTitle;
