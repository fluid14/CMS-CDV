import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/text/Paragraph/Paragraph';

const QuotationWrap = styled.div`
  display: block;
  margin: 4em auto;
  width: 70%;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 200%;
  text-align: center;
`;

const Quotation = ({ children }) => (
  <QuotationWrap>
    <StyledParagraph>{`" ${children} "`}</StyledParagraph>
  </QuotationWrap>
);

Quotation.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Quotation;
