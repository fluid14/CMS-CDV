import React, { Component } from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import SectionWrap from 'components/Helpers/SectionWrap';
import Paragraph from 'components/text/Paragraph/Paragraph';
import Contact from 'components/Contact/Contact';
import getArticle from './templates/getArticle';

class AboutUsView extends Component {
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
          <HeroImage imgSrc={article.hero_img1}>
            <>{article.short_title}</>
          </HeroImage>
          <Container>
            <SectionWrap>
              <Paragraph>
                <>{article.paragraph}</>
              </Paragraph>
            </SectionWrap>
            <Contact
              mail={article.email}
              phone={article.phone}
              city={article.city}
              zip={article.zip_code}
              street={article.street}
            />
          </Container>
        </>
      </MainTemplate>
    );
  }
}

export default AboutUsView;
