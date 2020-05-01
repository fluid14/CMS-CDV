import React, { Component } from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import SectionWrap from 'components/Helpers/SectionWrap';
import ParagraphTile from 'components/ParagraphTile/ParagraphTile';
import axios from 'axios';

const StyledParagraphTile = styled(ParagraphTile)`
  margin-bottom: 2em;
`;

class ArticleTilesTemplate extends Component {
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
          <HeroImage imgSrc={article.image}>
            <>{article.short_title}</>
          </HeroImage>
          <Container>
            <SectionWrap>
              <StyledParagraphTile title={article.tile_title1} imgSrc={article.tile_image1}>
                <>{article.tile_paragraph1}</>
              </StyledParagraphTile>
              <StyledParagraphTile reverse title={article.tile_title2} imgSrc={article.tile_image2}>
                <>{article.tile_paragraph2}</>
              </StyledParagraphTile>
              <StyledParagraphTile title={article.tile_title3} imgSrc={article.tile_image3}>
                <>{article.tile_paragraph3}</>
              </StyledParagraphTile>
            </SectionWrap>
          </Container>
        </>
      </MainTemplate>
    );
  }
}

export default ArticleTilesTemplate;
