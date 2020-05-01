import React, { Component } from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import MainTitle from 'components/text/MainTitle/MainTitle';
import SectionWrap from 'components/Helpers/SectionWrap';
import Paragraph from 'components/text/Paragraph/Paragraph';
import Gallery from 'components/Gallery/Gallery';
import WithoutHeroImg from 'components/Helpers/WithoutHeroImg';
import HeroImage from 'components/Image/HeroImage';
import axios from 'axios';

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

    axios
      .get(`http://127.0.0.1:5000/article/${id}`)
      .then(article => {
        this.setState({
          article: article.data.content,
        });
      })
      .catch(err => console.log(err));
  }

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
                    article.image1,
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
