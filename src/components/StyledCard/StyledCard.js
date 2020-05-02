import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Wrap = styled.div`
  padding: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  label {
    font-weight: 400;
    display: block;
    color: rgba(73, 80, 87, 0.8);
  }
`;

const StyledCard = ({ children }) => <Wrap className="w-100">{children}</Wrap>;

StyledCard.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StyledCard;
