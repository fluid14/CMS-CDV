import React, { Component } from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import MainTitle from 'components/text/MainTitle/MainTitle';
import SectionWrap from 'components/Helpers/SectionWrap';
import Paragraph from 'components/text/Paragraph/Paragraph';
import Gallery from 'components/Gallery/Gallery';
import WithoutHeroImg from 'components/Helpers/WithoutHeroImg';
import HeroImage from 'components/Image/HeroImage';
import getArticle from './getArticle';

class GalleryTemplate extends Component {
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
          <HeroImage imgSrc={article.hero_img}>
            <>{article.header}</>
          </HeroImage>
          <Container>
            <WithoutHeroImg>
              <SectionWrap m="100">
                <MainTitle>
                  <>{article.short_title}</>
                </MainTitle>
                <Paragraph>
                  <>{article.paragraph}</>
                </Paragraph>
              </SectionWrap>
              <SectionWrap>
                <Gallery
                  gallery={[
                    article.image2,
                    article.image3,
                    article.image4,
                    article.image5,
                    article.image6,
                    article.image7,
                    article.image8,
                    article.image9,
                  ]}
                />
              </SectionWrap>
            </WithoutHeroImg>
          </Container>
        </>
      </MainTemplate>
    );
  }
}

export default GalleryTemplate;
