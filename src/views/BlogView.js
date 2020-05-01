import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardImg,
  CardBody,
  CardText,
} from 'reactstrap';
import WithoutHeroImg from 'components/Helpers/WithoutHeroImg';
import Title from 'components/text/Title/Title';
import axios from 'axios';

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 58px - 56px - 4em - 5em);
`;

const StyledCard = styled(Card)`
  margin-bottom: 1.5em;
`;

class BlogView extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    axios
      .get('http://127.0.0.1:5000/all-articles')
      .then(response => {
        console.log(response);
        this.setState({
          articles: response.data.articles,
        });
      })
      .then(response => response.json())
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { articles } = this.state;
    let countLeft = 0;
    let countRight = 0;
    return (
      <MainTemplate>
        <WithoutHeroImg>
          <StyledContainer>
            <Title className="mb-5">
              <>Artykuły</>
            </Title>
            <Row>
              <Col sm="6">
                {articles.map(article => {
                  countLeft++;
                  if (countLeft % 2 !== 0) {
                    return (
                      <StyledCard body key={article.id}>
                        <CardImg
                          top
                          width="100%"
                          src={article.preview_image}
                          alt="Card image cap"
                        />
                        <CardBody>
                          <CardTitle>{article.title}</CardTitle>
                          <CardText>{article.description}</CardText>
                          <Button
                            color="info"
                            tag={Link}
                            to={`/blog/${article.page_type}/${article.id}`}
                          >
                            Czytaj
                          </Button>
                        </CardBody>
                      </StyledCard>
                    );
                  }
                })}
              </Col>
              <Col sm="6">
                {articles.map(article => {
                  countRight++;
                  if (countRight % 2 === 0) {
                    return (
                      <StyledCard body key={article.id}>
                        <CardImg
                          top
                          width="100%"
                          src={`data:image/jpeg;base64,${article.preview_image}`}
                          alt="Card image cap"
                        />
                        <CardBody>
                          <CardTitle>{article.title}</CardTitle>
                          <CardText>{article.description}</CardText>
                          <Button
                            color="info"
                            tag={Link}
                            to={`/blog/${article.page_type}/${article.id}`}
                          >
                            Czytaj
                          </Button>
                        </CardBody>
                      </StyledCard>
                    );
                  }
                })}
              </Col>
            </Row>
          </StyledContainer>
        </WithoutHeroImg>
      </MainTemplate>
    );
  }
}

export default BlogView;
