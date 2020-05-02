import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import Image from 'components/Image/Image';

const GalleryWrap = styled.div`
  width: 100%;
`;

const StyledRow = styled(Row)`
  margin-bottom: 30px;
`;

const Gallery = ({ gallery }) => (
  <GalleryWrap>
    <StyledRow>
      {gallery.map(img => (
        <Col sm="3" className="mb-4">
          <Image src={img} />
        </Col>
      ))}
    </StyledRow>
  </GalleryWrap>
);

Gallery.propTypes = {
  gallery: PropTypes.array.isRequired,
};

export default Gallery;
