/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
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
  ListGroupItem,
  CardImg,
  CardBody,
  ListGroup,
} from 'reactstrap';
import WithoutHeroImg from 'components/Helpers/WithoutHeroImg';
import Title from 'components/text/Title/Title';

import galleryImg from 'assets/image/layouts/gallery.png';
import heroImg from 'assets/image/layouts/hero.png';
import simpleTextImg from 'assets/image/layouts/simpleText.png';
import ilustratedImg from 'assets/image/layouts/ilustrated.png';
import sliderImg from 'assets/image/layouts/slider.png';
import articleImg from 'assets/image/layouts/article.png';
import articleTilesImg from 'assets/image/layouts/articleTiles.png';
import articleBottomImg from 'assets/image/layouts/articleBottom.png';

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 58px - 56px - 4em - 5em);
`;

const StyledCard = styled(Card)`
  margin-bottom: 1.5em;
`;

const ChooseArticleView = () => {
  const articles = [
    {
      title: 'Galeria',
      id: 1,
      img: galleryImg,
      description: ['Tytuł', 'Paragraf', '9 obrazków'],
      name: 'gallery',
    },
    {
      title: 'Kafelki',
      id: 2,
      img: heroImg,
      description: ['Obrazek', 'Paragraf'],
      name: 'tiles',
    },
    {
      title: 'Prosty tekst',
      id: 3,
      img: simpleTextImg,
      description: ['Tytuł', 'Paragraf'],
      name: 'simple-text',
    },
    {
      title: 'Cytat',
      id: 4,
      img: ilustratedImg,
      description: ['Wyrózniony paragraf', 'Paragraf', 'Cytat', 'Paragraf'],
      name: 'quotation',
    },
    {
      title: 'Duzy slider',
      id: 5,
      img: sliderImg,
      description: ['Tytuł', 'Slider - 6 obrazków', 'Paragraf'],
      name: 'slider',
    },
    {
      title: 'Artykuł',
      id: 6,
      img: articleImg,
      description: ['Wyrózniony paragraf', 'Paragraf', 'Obraz', 'Paragraf', 'Obraz', 'Paragraf'],
      name: 'article',
    },
    {
      title: 'Artykuł z kaflami',
      id: 7,
      img: articleTilesImg,
      description: ['3x kafelek:', 'Obrazek', 'Tytuł', 'Paragraf'],
      name: 'article-tiles',
    },
    {
      title: 'Artykuł z kaflem u dołu',
      id: 8,
      img: articleBottomImg,
      description: ['Tytuł', 'Paragraf', 'Obrazek', 'Tytuł', 'Paragraf'],
      name: 'article-bottom-tiles',
    },
  ];

  return (
    <MainTemplate>
      <WithoutHeroImg>
        <StyledContainer>
          <Title className="mb-5">
            <>Wybierz układ</>
          </Title>
          <Row>
            <Col sm="6">
              {articles.map(article => {
                if (article.id % 2 === 1) {
                  return (
                    <StyledCard key={article.id} body>
                      <CardImg top width="100%" src={article.img} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>{article.title}</CardTitle>
                        <ListGroup className="mb-4">
                          {article.description.map(item => {
                            return <ListGroupItem>{item}</ListGroupItem>;
                          })}
                        </ListGroup>
                        <Button color="info" tag={Link} to={`/new/${article.name}`}>
                          Wybierz
                        </Button>
                      </CardBody>
                    </StyledCard>
                  );
                }
              })}
            </Col>
            <Col sm="6">
              {articles.map(article => {
                if (article.id % 2 === 0) {
                  return (
                    <StyledCard body>
                      <CardImg top width="100%" src={article.img} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>{article.title}</CardTitle>
                        <ListGroup className="mb-4">
                          {article.description.map(item => {
                            return <ListGroupItem>{item}</ListGroupItem>;
                          })}
                        </ListGroup>
                        <Button color="info" tag={Link} to={`/new/${article.name}`}>
                          Wybierz
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
};

export default ChooseArticleView;
