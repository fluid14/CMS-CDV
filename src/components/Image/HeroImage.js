import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from 'components/text/Title/Title';

const ImageWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  background: ${({ imgSrc }) => `url("${imgSrc}") center center / cover no-repeat`};
  z-index: -2;
  margin-bottom: 4em;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #000;
    z-index: -1;
    opacity: 0.6;
    mix-blend-mode: multiply;
  }
`;

const WhiteTitle = styled(Title)`
  color: white;
`;

const HeroImage = ({ children, imgSrc }) => (
  <ImageWrap imgSrc={imgSrc}>
    <WhiteTitle border={false}>{children}</WhiteTitle>
  </ImageWrap>
);

HeroImage.propTypes = {
  children: PropTypes.element.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default HeroImage;
