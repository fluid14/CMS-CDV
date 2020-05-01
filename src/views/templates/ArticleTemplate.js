import React, { Component } from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import SectionWrap from 'components/Helpers/SectionWrap';
import Paragraph from 'components/text/Paragraph/Paragraph';
import Image from 'components/Image/Image';
import axios from 'axios';

const ImageStyled = styled(Image)`
  margin: 2em 0;
`;

class ArticleTemplate extends Component {
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
        <HeroImage imgSrc={article.image1}>
          <>{article.short_title}</>
        </HeroImage>
        <Container>
          <SectionWrap>
            <Paragraph bold>{article.paragraph1}</Paragraph>
            <Paragraph>{article.paragraph2}</Paragraph>
            <ImageStyled src={article.image2} />
            <Paragraph>{article.paragraph3}</Paragraph>
            <ImageStyled src={article.image3} />
            <Paragraph>{article.paragraph4}</Paragraph>
          </SectionWrap>
        </Container>
      </MainTemplate>
    );
  }
}

export default ArticleTemplate;
