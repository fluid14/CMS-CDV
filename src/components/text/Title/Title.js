import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleText = styled.h1`
  display: inline-block;
  border-bottom: ${({ border }) => (border ? '2px solid var(--teal)' : 'none')};
  text-transform: uppercase;
  font-weight: 700;
`;

const Title = ({ children, border, className }) => (
  <TitleText border={border} className={`${className} display-5`}>
    {children}
  </TitleText>
);

Title.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  border: PropTypes.bool,
};

Title.defaultProps = {
  border: true,
  className: '',
};

export default Title;
