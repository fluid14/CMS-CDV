import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { Container, Row, Col, Card, Button, CardTitle, ButtonGroup } from 'reactstrap';
import WithoutHeroImg from 'components/Helpers/WithoutHeroImg';
import Title from 'components/text/Title/Title';
import axios from 'axios';

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 58px - 56px - 4em - 5em);
`;

const StyledCard = styled(Card)`
  margin-bottom: 1.5em;
`;

class AllArticlesView extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getArticles(id);
  }

  getArticles = id => {
    axios
      .get(`http://127.0.0.1:5000//all-articles/${id}`)
      .then(response => {
        console.log(response);
        this.setState({
          articles: response.data.articles,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { articles } = this.state;
    return (
      <MainTemplate>
        <WithoutHeroImg>
          <StyledContainer>
            <Title className="mb-5">
              <>Wszystkie artykuły</>
            </Title>
            <Row>
              <Col sm="6">
                {articles.map(article => {
                  return (
                    <StyledCard body>
                      <CardTitle className="font-weight-bold">{article.title}</CardTitle>
                      <ButtonGroup size="md">
                        <Button tag={Link} to={`/blog/article/${article.id}`} color="info">
                          Wyświetl
                        </Button>
                        <Button tag={Link} to={`/blog/edit/${article.id}`} color="info">
                          Edycja
                        </Button>
                        <Button tag={Link} to={`/blog/article/${article.id}`} color="info">
                          Usuń
                        </Button>
                      </ButtonGroup>
                    </StyledCard>
                  );
                })}
              </Col>
            </Row>
          </StyledContainer>
        </WithoutHeroImg>
      </MainTemplate>
    );
  }
}

export default AllArticlesView;
