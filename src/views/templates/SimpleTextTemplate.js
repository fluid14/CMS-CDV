import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'reactstrap';
import HeroImage from 'components/Image/HeroImage';
import SectionWrap from 'components/Helpers/SectionWrap';
import MainTitle from 'components/text/MainTitle/MainTitle';
import Paragraph from 'components/text/Paragraph/Paragraph';
import axios from 'axios';

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
