import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import Image from 'components/Image/Image';
import 'swiper/css/swiper.css';
import { Col } from 'reactstrap';

const SlideTitle = styled.p`
  color: #ffffff;
  font-size: 14px;
  background-color: #000;
  font-size: 700;
  padding: 10px 20px;
`;

class Slider extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {data.map(item => {
            return (
              <Col key={item.title} md="3" className="swiper-slide mb-5">
                <Image src={item.url} />
                <SlideTitle>{item.title}</SlideTitle>
              </Col>
            );
          })}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    );
  }
}

Slider.propType = {
  data: PropTypes.array.isRequired,
};

export default Slider;
