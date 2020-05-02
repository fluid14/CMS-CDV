import React, { Component } from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import SectionWrap from 'components/Helpers/SectionWrap';
import Paragraph from 'components/text/Paragraph/Paragraph';
import HeroImage from 'components/Image/HeroImage';
import Slider from 'components/Slider/Slider';
import MainTitle from 'components/text/MainTitle/MainTitle';
import getArticle from './getArticle';

class SliderTemplate extends Component {
  state = {
    article: [],
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    getArticle(this.changeState, id);
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
          <HeroImage imgSrc={article.image}>
            <>{article.header}</>
          </HeroImage>
          <Container>
            <MainTitle className="mb-3">
              <>{article.short_title}</>
            </MainTitle>
            <Slider
              data={[
                { url: article.slider_image1, title: article.slider_title1 },
                { url: article.slider_image2, title: article.slider_title2 },
                { url: article.slider_image3, title: article.slider_title3 },
                { url: article.slider_image4, title: article.slider_title4 },
                { url: article.slider_image5, title: article.slider_title5 },
                { url: article.slider_image6, title: article.slider_title6 },
              ]}
            />
            <SectionWrap>
              <Paragraph>
                <>{article.paragraph}</>
              </Paragraph>
            </SectionWrap>
          </Container>
        </>
      </MainTemplate>
    );
  }
}
export default SliderTemplate;
