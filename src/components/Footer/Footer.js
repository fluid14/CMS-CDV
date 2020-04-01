import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';

const FooterWrap = styled.div`
  width: 100%;
  background-color: var(--light);
  padding: 20px 0;
  & p {
    font-size: 12px;
    margin: 0;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
`;

const Footer = () => (
  <FooterWrap>
    <StyledContainer>
      <p>CDV@2020 || Jakub Dolata Filip Baumgart</p>
    </StyledContainer>
  </FooterWrap>
);

export default Footer;
