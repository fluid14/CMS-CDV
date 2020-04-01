import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleText = styled.h1`
  display: inline-block;
  border-bottom: 2px solid var(--teal);
  text-transform: uppercase;
  font-weight: 700;
`;

const Title = ({ children }) => (
  <>
    <TitleText className="display-5">{children}</TitleText>
  </>
);

Title.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Title;
