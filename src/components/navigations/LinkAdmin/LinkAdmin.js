import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: block;
  font-size: 1.5rem;
  color: var(--dark);
  font-weight: 500;
  margin-bottom: 0.7em;
  transition: 0.3s ease;

  &:hover {
    color: var(--gray);
    text-decoration: none;
  }
`;

const LinkAdmin = ({ children, link }) => <StyledLink to={link}>{children}</StyledLink>;

LinkAdmin.propTypes = {
  children: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
};

export default LinkAdmin;
