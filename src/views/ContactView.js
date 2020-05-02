/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import Contact from 'components/Contact/Contact';
import Map from 'components/Map/Map';
import getArticle from './templates/getArticle';

class ContactView extends Component {
  state = {
    article: {},
  };

  componentDidMount() {
    getArticle(this.changeState, 85);
  }

  changeState = article => {
    this.setState({
      article,
    });
  };

  render() {
    const { article } = this.state;
    console.log(article);
    return (
      <MainTemplate>
        <>
          <HeroImage imgSrc={article.hero_img2}>
            <>{article.title2}</>
          </HeroImage>
          <Container>
            <Contact
              mail={article.email}
              phone={article.phone}
              city={article.city}
              zip={article.zip_code}
              street={article.street}
            />
          </Container>
          <Map lat={article.latitude} lng={article.longitude} />
        </>
      </MainTemplate>
    );
  }
}

export default ContactView;
