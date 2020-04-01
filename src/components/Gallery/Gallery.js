import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import Image from 'components/Image/Image';

const GalleryWrap = styled.div`
  width: 100%;
`;

const StyledRow = styled(Row)`
  margin-bottom: 30px;
`;

const Gallery = () => (
  <GalleryWrap>
    <StyledRow>
      <Col sm="3">
        <Image src="https://source.unsplash.com/random/500x501" />
      </Col>
      <Col sm="3">
        <Image src="https://source.unsplash.com/random/501x500" />
      </Col>
      <Col sm="3">
        <Image src="https://source.unsplash.com/random/500x500" />
      </Col>
      <Col sm="3">
        <Image src="https://source.unsplash.com/random/501x500" />
      </Col>
    </StyledRow>
    <StyledRow>
      <Col sm="3">
        <Image src="https://source.unsplash.com/random/500x501" />
      </Col>
      <Col sm="3">
        <Image src="https://source.unsplash.com/random/501x500" />
      </Col>
      <Col sm="3">
        <Image src="https://source.unsplash.com/random/500x500" />
      </Col>
      <Col sm="3">
        <Image src="https://source.unsplash.com/random/501x500" />
      </Col>
    </StyledRow>
  </GalleryWrap>
);

export default Gallery;
