import React, { Component } from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate';
import { Container, Row, Col } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import SectionWrap from 'components/Helpers/SectionWrap';
import Paragraph from 'components/text/Paragraph/Paragraph';
import Image from 'components/Image/Image';
import getArticle from './getArticle';

const StyledImage = styled(Image)`
  margin-bottom: 2em;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: justify;
`;

class HeroTemplate extends Component {
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
            <>{article.short_title}</>
          </HeroImage>
          <Container>
            <SectionWrap>
              <Row>
                <Col md="4" className="mt-5">
                  <StyledImage src={article.image1} />
                  <StyledParagraph>
                    <>{article.paragraph1}</>
                  </StyledParagraph>
                </Col>
                <Col md="4" className="mt-5">
                  <StyledImage src={article.image2} />
                  <StyledParagraph>
                    <>{article.paragraph2}</>
                  </StyledParagraph>
                </Col>
                <Col md="4" className="mt-5">
                  <StyledImage src={article.image3} />
                  <StyledParagraph>
                    <>{article.paragraph3}</>
                  </StyledParagraph>
                </Col>
              </Row>
            </SectionWrap>
          </Container>
        </>
      </MainTemplate>
    );
  }
}
export default HeroTemplate;
