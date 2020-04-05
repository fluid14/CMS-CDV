import React from 'react';
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

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 58px - 56px - 4em - 5em);
`;

const StyledCard = styled(Card)`
  margin-bottom: 1.5em;
`;

const BlogView = () => {
  const articles = [
    {
      title: 'PS5 zabójcza cena!',
      img: 'https://source.unsplash.com/random/500x200',
      teaser:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum iste officia dolorem quis accusantium hic nostrum modi quisquam dolorum obcaecati!',
      id: 12,
      timestamp: '12.05.2020',
    },
    {
      title: 'PS5 vs Xbox Serises X',
      img: 'https://source.unsplash.com/random/501x200',
      teaser:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum iste officia dolorem quis accusantium hic nostrum modi quisquam dolorum obcaecati!',
      id: 13,
      timestamp: '15.05.2020',
    },
    {
      title: 'T-Mobile Wielkie promocje!',
      img: 'https://source.unsplash.com/random/502x200',
      teaser:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum iste officia dolorem quis accusantium hic nostrum modi quisquam dolorum obcaecati!',
      id: 15,
      timestamp: '12.06.2020',
    },
    {
      title: 'Czy potrzebujemy corocznych premier smartfonów?',
      img: 'https://source.unsplash.com/random/503x200',
      teaser:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum iste officia dolorem quis accusantium hic nostrum modi quisquam dolorum obcaecati!',
      id: 17,
      timestamp: '19.05.2020',
    },
    {
      title:
        'Apple zapłaciło „hakerowi” 75 tys. dolarów. Dzięki temu możecie czuć się bezpieczniej',
      img: 'https://source.unsplash.com/random/500x201',
      teaser:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum iste officia dolorem quis accusantium hic nostrum modi quisquam dolorum obcaecati!',
      id: 21,
      timestamp: '12.05.2020',
    },
    {
      title: 'Zoom pada ofiarą własnego sukcesu',
      img: 'https://source.unsplash.com/random/500x202',
      teaser:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum iste officia dolorem quis accusantium hic nostrum modi quisquam dolorum obcaecati!',
      id: 32,
      timestamp: '10.05.2020',
    },
  ];

  return (
    <MainTemplate>
      <WithoutHeroImg>
        <StyledContainer>
          <Title className="mb-5">
            <>Artykuły</>
          </Title>
          <Row>
            {articles.map(article => {
              return (
                <Col sm="6">
                  <StyledCard body>
                    <CardImg top width="100%" src={article.img} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{article.title}</CardTitle>
                      <CardText>{article.teaser}</CardText>
                      <Button color="info" tag={Link} to={`/blog/article/${article.id}`}>
                        Czytaj
                      </Button>
                    </CardBody>
                  </StyledCard>
                </Col>
              );
            })}
          </Row>
        </StyledContainer>
      </WithoutHeroImg>
    </MainTemplate>
  );
};

export default BlogView;
