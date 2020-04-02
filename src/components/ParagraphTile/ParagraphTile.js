import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'components/Image/Image';
import { Row, Col } from 'reactstrap';
import Title from 'components/text/Title/Title';
import Paragraph from 'components/text/Paragraph/Paragraph';

const ParagraphWrap = styled.div`
  width: 100%;
`;

const ParagraphTile = ({ children, title, imgSrc, className, reverse }) => (
  <ParagraphWrap
    as={Row}
    className={reverse ? `${className} flex-row-reverse` : className}
    noGutters
  >
    <Col lg={{ size: 5, offset: reverse ? 1 : 0 }}>
      <Image src={imgSrc} />
    </Col>
    <Col lg={{ size: 6, offset: reverse ? 0 : 1 }}>
      <Title>
        <>{title}</>
      </Title>
      <Paragraph>{children}</Paragraph>
    </Col>
  </ParagraphWrap>
);

ParagraphTile.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

ParagraphTile.defaultProps = {
  reverse: false,
};

export default ParagraphTile;
