import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Card } from 'reactstrap';

const Wrap = styled(Card)`
  margin-bottom: 1.5em;
`;

const StyledCard = ({ children }) => <Wrap>{children}</Wrap>;

StyledCard.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StyledCard;
