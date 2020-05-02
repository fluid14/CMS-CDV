import React, { Component } from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import SectionWrap from 'components/Helpers/SectionWrap';
import Paragraph from 'components/text/Paragraph/Paragraph';
import Quotation from 'components/text/Quotation/Quotation';
import getArticle from './getArticle';

class IlustratedArticleTemplate extends Component {
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
        <HeroImage imgSrc={article.image}>{article.short_title}</HeroImage>
        <Container>
          <SectionWrap>
            <Paragraph bold>{article.paragraph1}</Paragraph>
            <Paragraph>{article.paragraph2}</Paragraph>
            <Quotation>{article.quote}</Quotation>
            <Paragraph>{article.paragraph3}</Paragraph>
          </SectionWrap>
        </Container>
      </MainTemplate>
    );
  }
}

export default IlustratedArticleTemplate;
