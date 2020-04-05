import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { Container, Row, Col, Card, Button, CardTitle, ButtonGroup } from 'reactstrap';
import WithoutHeroImg from 'components/Helpers/WithoutHeroImg';
import Title from 'components/text/Title/Title';

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 58px - 56px - 4em - 5em);
`;

const StyledCard = styled(Card)`
  margin-bottom: 1.5em;
`;

const AllArticlesView = () => {
  const articles = [
    { title: 'PS5 zabójcza cena!', id: 12, timestamp: '12.05.2020' },
    { title: 'PS5 vs Xbox Serises X', id: 13, timestamp: '15.05.2020' },
    { title: 'T-Mobile Wielkie promocje!', id: 15, timestamp: '12.06.2020' },
    { title: 'Czy potrzebujemy corocznych premier smartfonów?', id: 17, timestamp: '19.05.2020' },
    {
      title:
        'Apple zapłaciło „hakerowi” 75 tys. dolarów. Dzięki temu możecie czuć się bezpieczniej',
      id: 21,
      timestamp: '12.05.2020',
    },
    { title: 'Zoom pada ofiarą własnego sukcesu', id: 32, timestamp: '10.05.2020' },
  ];

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
                      <Button tag={Link} to="/blog/article/1" color="info">
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
};

export default AllArticlesView;
