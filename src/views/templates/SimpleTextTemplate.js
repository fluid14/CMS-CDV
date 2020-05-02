import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import SectionWrap from 'components/Helpers/SectionWrap';
import MainTitle from 'components/text/MainTitle/MainTitle';
import Paragraph from 'components/text/Paragraph/Paragraph';
import getArticle from './getArticle';

class SimpleTextTemplate extends Component {
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
        <HeroImage imgSrc={article.image} />
        <Container>
          <SectionWrap>
            <MainTitle>{article.short_title}</MainTitle>
            <Paragraph>{article.paragraph}</Paragraph>
          </SectionWrap>
        </Container>
      </MainTemplate>
    );
  }
}
SimpleTextTemplate.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
export default SimpleTextTemplate;
