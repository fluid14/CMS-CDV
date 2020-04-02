import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ParagraphStyled = styled.p`
  margin-top: 0.5em;
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
`;

const Paragraph = ({ children, bold, className }) => (
  <ParagraphStyled className={className} bold={bold}>
    {children}
  </ParagraphStyled>
);

Paragraph.propTypes = {
  children: PropTypes.element.isRequired,
  bold: PropTypes.bool,
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  bold: false,
  className: '',
};

export default Paragraph;
