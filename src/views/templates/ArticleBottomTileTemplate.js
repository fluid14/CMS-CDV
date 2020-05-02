import React, { Component } from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import SectionWrap from 'components/Helpers/SectionWrap';
import ParagraphTile from 'components/ParagraphTile/ParagraphTile';
import MainTitle from 'components/text/MainTitle/MainTitle';
import Paragraph from 'components/text/Paragraph/Paragraph';
import getArticle from './getArticle';

class ArticleBottomTileTemplate extends Component {
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
          <HeroImage imgSrc={article.image1}>
            <>{article.title1}</>
          </HeroImage>
          <Container>
            <SectionWrap>
              <MainTitle>{article.title2}</MainTitle>
              <Paragraph>{article.paragraph1}</Paragraph>
            </SectionWrap>
            <SectionWrap>
              <ParagraphTile title={article.paragraph2} imgSrc={article.image2}>
                <>{article.paragraph3}</>
              </ParagraphTile>
            </SectionWrap>
          </Container>
        </>
      </MainTemplate>
    );
  }
}

export default ArticleBottomTileTemplate;
